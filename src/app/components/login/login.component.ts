import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MeminiAwardApiService} from "../../services/memini-award-api.service";
import {PlatformLocation} from "@angular/common";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private route: ActivatedRoute, private meminiApi: MeminiAwardApiService, private authService: AuthService) { }

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
      }
    });
  }
  loginWithDiscord() {
  window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1155291213142949918&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Flogin&response_type=code&scope=identify%20guilds%20guilds.members.read'
  }
}
