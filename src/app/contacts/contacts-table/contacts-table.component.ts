import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  imports: [CommonModule],
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {
  contacts = [
    { 
      nom: 'John Doe', 
      email: 'john@example.com', 
      telephone: '1234567890', 
      isEditingNom: false,
      isEditingEmail: false,
      isEditingTelephone: false
    },
    { 
      nom: 'Jane Smith', 
      email: 'jane@example.com', 
      telephone: '0987654321', 
      isEditingNom: false,
      isEditingEmail: false,
      isEditingTelephone: false
    },
    { 
      nom: 'Alice Brown', 
      email: 'alice@example.com', 
      telephone: '1122334455', 
      isEditingNom: false,
      isEditingEmail: false,
      isEditingTelephone: false
    },
  ];

  ajouterContact() {
    // Ajouter une nouvelle ligne vide
    this.contacts.push({ 
      nom: '', email: '', telephone: '', 
      isEditingNom: true, isEditingEmail: true, isEditingTelephone: true 
    });
  }

  consulterContact(contact: any) {
    alert(`Voir les détails du contact: \nNom: ${contact.nom} \nEmail: ${contact.email} \nTéléphone: ${contact.telephone}`);
  }

  modifierContact(contact: any) {
    contact.isEditingNom = true;
    contact.isEditingEmail = true;
    contact.isEditingTelephone = true;
  }

  sauvegarderContact(contact: any) {
    contact.isEditingNom = false;
    contact.isEditingEmail = false;
    contact.isEditingTelephone = false;
    alert(`Les modifications ont été sauvegardées pour ${contact.nom}`);
  }

  onInputChange(event: any, field: string, contact: any) {
    contact[field] = event.target.value;  // Met à jour le champ du contact selon l'entrée
  }

  supprimerContact(contact: any) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce contact ?')) {
      const index = this.contacts.indexOf(contact);
      if (index !== -1) {
        this.contacts.splice(index, 1);
      }
    }
  }

  ajouterFavoris(contact: any) {
    alert(`Contact ${contact.nom} ajouté aux favoris.`);
  }
}
