import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  currentAwardIndex: number = 0;
  awards: any[] = []; // Inserisci qui la lista degli award

  selectedUser: string = '';
  currentAwardTitle: any;
  currentAwardDescription: any;
  currentAwardImageUrl: any;
  users: any[] = [
    { name: 'Utente 1', image: 'https://images.corsidia.com/ckeditor/pictures/data/000/000/086/content/immagini-e-tabelle-html-00.jpg' },
    { name: 'Utente 2', image: 'url-immagine-2' },
    // Aggiungi altri utenti
  ];
  constructor() { }

  ngOnInit(): void {
    // Inizializza la lista degli award e degli utenti
    this.awards = [
      { title: 'Award 1', description: 'Descrizione dell\'Award 1', imageUrl: 'https://media.tenor.com/78T_NTBNlskAAAAC/steve-carell-the-office.gif' },
      { title: 'Award 2', description: 'Descrizione dell\'Award 2', imageUrl: 'url-immagine-2' },
      // Aggiungi altri award
    ];


    this.loadCurrentAward();
  }

  loadCurrentAward() {
    if (this.currentAwardIndex < this.awards.length) {
      const currentAward = this.awards[this.currentAwardIndex];
      this.currentAwardTitle = currentAward.title;
      this.currentAwardDescription = currentAward.description;
      this.currentAwardImageUrl = currentAward.imageUrl;
    }
  }

  nextAward() {
    if (this.currentAwardIndex < this.awards.length - 1) {
      this.currentAwardIndex++;
      this.loadCurrentAward();
    }
  }
  previousAward() {
    if (this.currentAwardIndex > 0) {
      this.currentAwardIndex--;
      this.loadCurrentAward();
    }
  }
  vote() {
    // Aggiungi la logica per il voto qui
    console.log(`Hai votato ${this.currentAwardTitle} per ${this.selectedUser}`);
    this.nextAward(); // Passa all'award successivo dopo il voto
  }
}
