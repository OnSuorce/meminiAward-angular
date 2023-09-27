import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Award} from "../../models/Award";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  currentAwardIndex: number = 0;
  awards: Award[] = [];

  selectedUser: string = '';
  currentAwardTitle: any;
  currentAwardDescription: any;
  currentAwardImageUrl: any;
  users: any[] = [
    { name: 'Utente 1', image: 'https://images.corsidia.com/ckeditor/pictures/data/000/000/086/content/immagini-e-tabelle-html-00.jpg' },
    { name: 'Utente 2', image: 'url-immagine-2' },
    // Aggiungi altri utenti
  ];
  constructor(private  meminiApi: MeminiAwardApiService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    // Inizializza la lista degli award e degli utenti
    this.meminiApi.getAwards().subscribe({

      next: value => {
        this.awards = value
        console.log(value)
        this.cdRef.detectChanges()
      }
    })

    console.log(this.awards)

    this.loadCurrentAward();
  }

  loadCurrentAward() {
    if (this.currentAwardIndex < this.awards.length) {
      const currentAward: Award = this.awards[this.currentAwardIndex];
      this.currentAwardTitle = currentAward.title;
      this.currentAwardDescription = currentAward.description;
      this.currentAwardImageUrl = currentAward.image_url;
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
