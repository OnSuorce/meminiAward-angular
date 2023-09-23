import { Component } from '@angular/core';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css']
})
export class AwardListComponent {
  awards = [
    {
      name: 'Cringe',
      imageUrl: 'https://media.tenor.com/78T_NTBNlskAAAAC/steve-carell-the-office.gif',
      description: 'Per la persona piu dedicata nel fare cringiare gli altri',
      creatorName: "Lollo"
    },
    {
      name: 'Logorroico',
      imageUrl: 'https://media.tenor.com/gzpXxKAKfp0AAAAC/minions-blah-blah-blah.gif',
      description: 'Dedicato a colui che non si è fatto sfuggire occasione per rompere i coglioni parlando anche quando sarebbe stato gradito del silenzio',
      creatorName: "Lollo"
    },

    // Aggiungi altri award secondo necessità
  ];

  truncateDescription(description: string): string {
    const maxLength = 190;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  }
}
