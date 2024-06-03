import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AddFormContactComponent } from './components/add-contact/add-form-contact/add-form-contact.component';
import { EditContactComponent } from './components/list-contacts/edit-contact/edit-contact.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';

const routes: Route[] = [
  { path: '', redirectTo: 'add-contact', pathMatch: 'full' },

  { path: 'add-contact', component: AddContactComponent },

  { path: 'add-contact/add-form-contact', component: AddFormContactComponent },

  { path: 'list-contact', component: ListContactsComponent },

  { path: 'list-contact/edit-contact/:id', component: EditContactComponent },

  { path: '**', component: ListContactsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}