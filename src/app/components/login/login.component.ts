import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {environment} from "../../environment";

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


        this.meminiApi.sendDiscordCode(code, environment.redirect_uri).subscribe({
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

        if(this.meminiApi.isAuthenticated()){
          this.snackBar.open("You are logged in", "Close", {
            duration: 3000, // Duration in milliseconds (e.g., 3000 = 3 seconds)
          });
        }
      }
    });
  }
  loginWithDiscord() {
  window.location.href = environment.discord_auth_url
  }
}
