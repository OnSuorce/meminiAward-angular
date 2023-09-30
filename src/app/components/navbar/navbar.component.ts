import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";
import {User} from "../../models/user";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string | null = null;
  userImageUrl: string = "https://www.rainews.it/resizegd/768x-/dl/img/2022/05/29/1653823359813_Immagine__.png";
  constructor(private authService: AuthService, private meminiApi: MeminiAwardApiService) {
  }

  ngOnInit(): void {
    this.meminiApi.getUserInformation().subscribe({
      next: (v: User) => {
        console.log(v)
        this.userName = v.global_name
        this.userImageUrl = v.avatar_url

      },
      error: (e) => console.error(e),

    })
  }

  logoutF(){
    this.authService.flush();
    window.location.reload();
  }
}
