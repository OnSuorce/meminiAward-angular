import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {User} from "../models/user";
import {Award} from "../models/Award";
import {environment} from "../environment";

@Injectable({
  providedIn: 'root'
})
export class MeminiAwardApiService {

  private apiUrl = environment.apiUrl; // Sostituisci con l'URL effettivo

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(auth: boolean): HttpHeaders{

    if(auth && this.authService.isAuthenticated()){
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization' : "Bearer "+this.authService.getToken()// Tipo di contenuto JSON
      });
    }else {
      return new HttpHeaders({
        'Content-Type': 'application/json'
      });
    }

}

  public sendDiscordCode(access_token: string, uri: string): Observable<any> {
    // Creazione del corpo della richiesta
    const body = { "code": access_token, "redirect_uri":uri };

    // Impostazione delle intestazioni della richiesta (opzionale)
    const headers = this.getHeaders(false);

    // Esegui la richiesta POST
    return this.http.post<any>(this.apiUrl + "/auth/login", body, { headers });
  }

  public getUserInformation(): Observable<User>{

    const headers = this.getHeaders(true);
    return this.http.get<User>(this.apiUrl+"/users/me",{headers} )
  }

  public getAwards(): Observable<Award[]>{
    const headers = this.getHeaders(true);
    return this.http.get<Award[]>(this.apiUrl+"/award",{headers} )
  }

  public postAward(award: Award): Observable<Award>{
    const headers = this.getHeaders(true);
    return this.http.post<any>(this.apiUrl+"/award", award, {headers})
  }
}
