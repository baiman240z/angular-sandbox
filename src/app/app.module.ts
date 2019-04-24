import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './child/child.component';
import { NextComponent } from './next/next.component';
import {StoreService} from './store.service';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'next', component: NextComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NextComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    StoreService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
