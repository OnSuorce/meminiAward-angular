import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route: ActivatedRoute,
              private meminiApi: MeminiAwardApiService,
              private authService: AuthService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Controlla se il parametro "code" è presente nell'URL
    this.route.queryParams.subscribe(params => {
      const code = params['code'];

      if (code) {
        // Il parametro "code" è presente nell'URL
        // Puoi procedere con la gestione del parametro "code" qui


        this.meminiApi.sendDiscordCode(code, window.location.origin).subscribe({
          next: (v) => {
            console.log(v)
            this.authService.setToken(v["jwt_token"])
            window.location.reload()
          },
          error: (e) => console.error(e),
          })

      } else {
        // Il parametro "code" non è presente nell'URL
        console.log('Parametro "code" non presente nell\'URL');

        if(this.authService.isAuthenticated()){
          this.snackBar.open("You are logged in", "Close", {
            duration: 3000, // Duration in milliseconds (e.g., 3000 = 3 seconds)
          });
        }
      }
    });
  }
  loginWithDiscord() {
  window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1155291213142949918&redirect_uri=https%3A%2F%2Fmeminiaward.mb-dev.it%2Flogin&response_type=code&scope=identify%20guilds%20guilds.members.read'
  }
}
