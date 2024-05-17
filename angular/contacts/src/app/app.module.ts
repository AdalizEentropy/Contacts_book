import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './core/head/head.component';
import { MenuComponent } from './core/menu/menu.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AddFormContactComponent } from './components/add-form-contact/add-form-contact.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { EditContactComponent } from './pages/contacts/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MenuComponent,
    AddContactComponent,
    ContactsComponent,
    AddFormContactComponent,
    ListContactsComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
