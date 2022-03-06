import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Json } from './json';

@Injectable()
export class ReformatHttpResponseInterceptor implements HttpInterceptor {

  constructor() {}

  private static canApplyLogic(body?: Json): boolean {
    return !!body;
  }

  private static applyLogic(body: Json): Json {
    return this.walkThroughKeysOfJson(body, this.makeFirstCharLowerCase);
  }

  private static walkThroughKeysOfJson(json: Json, keyFormatter: (key: string) => string): Json {
    if (json instanceof Array) {
      return json
        .map(item => this.walkThroughKeysOfJson(item, keyFormatter));
    } else if (json instanceof Object) {
      return Object
        .keys(json)
        .reduce((result, key) => ({
          ...result,
          [keyFormatter(key)]: this.walkThroughKeysOfJson(json[key], keyFormatter),
        }),
      {});
    } else {
      return json;
    }
  }

  private static makeFirstCharLowerCase(value: string): string {
    return value.length <= 1 ? value.toLowerCase() : `${value.slice(0, 1).toLowerCase()}${value.slice(1)}`;
  }

  public intercept(request: HttpRequest<Json>, next: HttpHandler): Observable<HttpEvent<Json>> {
    return next.handle(request).pipe(
      filter(event => event instanceof HttpResponse),
      map(event => event as HttpResponse<Json>),
      filter(event => ReformatHttpResponseInterceptor.canApplyLogic(event.body)),
      map(event => event.clone({
        body: ReformatHttpResponseInterceptor.applyLogic(event.body)
      }))
    );
  }
}
