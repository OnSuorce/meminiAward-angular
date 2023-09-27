import {Component, OnInit} from '@angular/core';
import {Award} from "../../models/Award";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css']
})
export class AwardListComponent  implements OnInit{
  awards: Award[] = [];
  truncateDescription(description: string): string {
    const maxLength = 190;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  }

  constructor(private meminiApi: MeminiAwardApiService) {
  }
  ngOnInit(): void {
    // Inizializza la lista degli award e degli utenti
    this.meminiApi.getAwards().subscribe({
      next: value => this.awards = value
    })
  }

}
