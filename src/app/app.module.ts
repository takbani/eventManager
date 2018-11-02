import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import {
  EventsListComponent,
  EventThumbnailComponent,
  NavBarComponent,
  EventService,
  ToastrService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  CollapsibleWellComponent
} from './events/index'

import {EventsAppComponent} from './events-app.component';
import { appRoutes } from '../routes'
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EventsAppComponent,
    EventThumbnailComponent,
    EventsListComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,
              ToastrService,
              EventRouteActivator,
              EventListResolver,
              AuthService,
            {provide:'canDeactivateCreateEvent',useValue:checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

  export function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
      return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
  }

 
