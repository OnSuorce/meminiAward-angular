import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";
import {Award} from "../../models/Award";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-award',
  templateUrl: './create-award.component.html',
  styleUrls: ['./create-award.component.css']
})
export class CreateAwardComponent implements OnInit {
  awardForm: FormGroup;
  awardImageUrl: string = ''; // Inizializza con un URL predefinito per <app-hexagon>

  constructor(private fb: FormBuilder, private meminiApi: MeminiAwardApiService, private snackBar: MatSnackBar) {
    this.awardForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', this.imageExtensionValidator()],
    });
  }

  ngOnInit(): void {
    this.meminiApi.isAuthenticated()
  }

  onSubmit() {
    if (this.awardForm.valid) {
      // Invia i dati del form al tuo servizio o gestiscili come desideri
      console.log(this.awardForm.value);

      // @ts-ignore
      let award: Award = {title: this.awardForm.value.name, description: this.awardForm.value.description, image_url: this.awardForm.value.imageUrl }

      this.meminiApi.postAward(award).subscribe({
        complete: () => { this.snackBar.open("Award created", "Close", {
          duration: 3000, // Duration in milliseconds (e.g., 3000 = 3 seconds)
        })
          this.awardForm.reset();}
      })
    }
  }

  imageExtensionValidator() {
    return (control: any) => {
      const imageUrl = control.value;
      if (imageUrl) {
        const validExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Estensioni valide
        const extension = imageUrl.split('.').pop().toLowerCase();

        if (!validExtensions.includes(extension)) {
          return { invalidExtension: true };
        }
      }
      return null;
    };
  }


}
