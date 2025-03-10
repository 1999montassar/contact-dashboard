import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './shared/sidebar/sidebar.component';  // Sidebar as a standalone component
import { SharedModule } from './shared/shared.module';
import { TrashComponent } from "./messages/trash/trash.component";
import { ContactsTableComponent } from "./contacts/contacts-table/contacts-table.component";  // Shared components for navbar, etc.

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this as a standalone component
  imports: [RouterModule, SidebarComponent, SharedModule, ],  // Import needed components/modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Component logic here
  
}
