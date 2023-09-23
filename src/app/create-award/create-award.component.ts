import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-award',
  templateUrl: './create-award.component.html',
  styleUrls: ['./create-award.component.css']
})
export class CreateAwardComponent implements OnInit {
  awardForm: FormGroup;
  awardImageUrl: string = ''; // Inizializza con un URL predefinito per <app-hexagon>

  constructor(private fb: FormBuilder) {
    this.awardForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', this.imageExtensionValidator()],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.awardForm.valid) {
      // Invia i dati del form al tuo servizio o gestiscili come desideri
      console.log(this.awardForm.value);
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
