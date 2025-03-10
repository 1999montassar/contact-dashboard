import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsTableComponent } from './contacts/contacts-table/contacts-table.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { SentMessagesComponent } from './messages/sent-messages/sent-messages.component';
import { ReceivedMessagesComponent } from './messages/received-messages/received-messages.component';
import { FavoritesComponent } from './messages/favorites/favorites.component';
import { TrashComponent } from './messages/trash/trash.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { MonCompteComponent } from './profile/mon-compte/mon-compte.component';
import { MessageFormComponent } from './messages/message-form/message-form.component';
import { NotificationsComponent } from './notifications/notifications.component';

// Définition des routes
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'contacts', component: ContactsTableComponent },
  
  { 
    path: 'messages', 
    component: MessagesListComponent,
    children: [
      { path: 'sent', component: SentMessagesComponent },
      { path: 'received', component: ReceivedMessagesComponent },
      { path: 'favorites', component: FavoritesComponent }
      
    ]
  },
  { path: 'trash', component: TrashComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'mon-compte', component: MonCompteComponent },
  { path: 'message-form', component: MessageFormComponent },
  { path: 'notifications', component: NotificationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule {}
