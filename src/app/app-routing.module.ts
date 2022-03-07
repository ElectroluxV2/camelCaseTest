import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BeforeComponent} from './before/before/before.component';
import {AfterComponent} from './after/after/after.component';

const routes: Routes = [
  { path: '', component: BeforeComponent, outlet: 'before' },
  { path: '', component: AfterComponent, outlet: 'after' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
