import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Award} from "../../models/Award";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";
import {User} from "../../models/user";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  users: User[] = [];
  constructor(private  meminiApi: MeminiAwardApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Inizializza la lista degli award e degli utenti
    this.meminiApi.getAwards().subscribe({

      next: value => {
        this.awards = value
        console.log(value)
        this.loadCurrentAward();
      },
      error: err => console.error(err),
      complete: () => {}
    })

    this.meminiApi.getUsers().subscribe({
      next: value => {
        this.users = value;
      }

    })




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


    this.snackBar.open(`Hai votato ${this.selectedUser} per ${this.currentAwardTitle}`, "Close", {
      duration: 3000, // Duration in milliseconds (e.g., 3000 = 3 seconds)
    });
    this.meminiApi.postVote({
      user_voted: this.selectedUser,
      award_id: this.awards[this.currentAwardIndex].id,
      user_voting: " " //api
    }).subscribe({
      complete: () =>   this.nextAward()
    })

  }
}
