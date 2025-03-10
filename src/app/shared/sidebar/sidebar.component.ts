import { Component } from '@angular/core'; 
import { RouterLink, RouterLinkActive } from '@angular/router'; 
import { CommonModule } from '@angular/common'; // Ajoute CommonModule ici

@Component({ 
  selector: 'app-sidebar', 
  templateUrl: './sidebar.component.html', 
  imports: [CommonModule, RouterLink, RouterLinkActive], // Ajoute CommonModule dans les imports 
  styleUrls: ['./sidebar.component.css'] 
}) 
export class SidebarComponent { 
  isMessagesOpen = false;  // Propriété pour gérer l'affichage du sous-menu

  
  // Fonction pour basculer l'état du sous-menu
  toggleMessages() { 
    this.isMessagesOpen = !this.isMessagesOpen; 
  }
} 