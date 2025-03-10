import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true, // Ajoutez cette ligne pour marquer le composant comme standalone
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterLink],
})
export class NavbarComponent {
  isDarkMode = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode); // Toggle dark mode
  }

  toggleMessages() {
    console.log('Messages button clicked!');
    // Handle messages toggle logic
  }

  logout() {
    console.log('Logging out!');
    // Handle logout logic
  }
}