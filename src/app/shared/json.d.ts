/**
 * This file provides JSON types, based on:
 * @see https://github.com/microsoft/TypeScript/issues/3496#issuecomment-128553540
 */

export type JsonValue = string | number | boolean | JsonObject | JsonArray;

export interface JsonObject {
  [key: string]: JsonValue;
}

export interface JsonArray extends Array<JsonValue> { }

/**
 * Top level array is valid JSON according to RFC 7159 @see https://www.ietf.org/rfc/rfc7159.txt
 */
export type Json = JsonValue | JsonValue[];
