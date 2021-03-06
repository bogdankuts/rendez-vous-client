import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { CalendarModule } from 'angular-calendar';

import { ROUTES } from './admin-panel.routes';
import { CoreModule } from '../core';

import { AdminLayoutComponent } from './components/layout';
import { AdminUsersComponent } from './components/users';
import { AdminFeedbacksComponent } from './components/feedbacks';
import { AdminFeedbackModalComponent } from './components/feedback-modal';
import { AdminPagesComponent } from './components/pages';
import { AdminForeignsComponent } from './components/foreigns';
import { AdminForeignModalComponent } from './components/foreign-modal';
import { AdminEventsComponent } from './components/events';
import { AdminEventModalComponent } from './components/event-modal';
import { AdminBookingComponent } from './components/booking';
import { BookingModalComponent } from '../portal/components/booking-modal';
import { AdminGalleryComponent } from './components/gallery';
import { AdminPhotoModalComponent } from './components/photo-modal';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    CoreModule,
    CalendarModule.forRoot()
  ],
  exports: [
    AdminLayoutComponent,
    AdminUsersComponent,
    AdminFeedbacksComponent,
    AdminFeedbackModalComponent,
    AdminPagesComponent,
    AdminForeignsComponent,
    AdminForeignModalComponent,
    AdminEventsComponent,
    AdminEventModalComponent,
    AdminBookingComponent,
    AdminGalleryComponent,
    AdminPhotoModalComponent
  ],
  declarations: [
    AdminLayoutComponent,
    AdminUsersComponent,
    AdminFeedbacksComponent,
    AdminFeedbackModalComponent,
    AdminPagesComponent,
    AdminForeignsComponent,
    AdminForeignModalComponent,
    AdminEventsComponent,
    AdminEventModalComponent,
    AdminBookingComponent,
    AdminGalleryComponent,
    AdminPhotoModalComponent
  ],
  providers: [],
  entryComponents: [
    AdminFeedbackModalComponent,
    AdminForeignModalComponent,
    AdminEventModalComponent,
    AdminPhotoModalComponent
  ],
  schemas: []
})

export class AdminPanelModule {
  public static ROUTES = ROUTES;
}
