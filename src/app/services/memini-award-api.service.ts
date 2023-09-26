import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MeminiAwardApiService {

  private apiUrl = 'http://localhost:8080/api/auth/login'; // Sostituisci con l'URL effettivo

  constructor(private http: HttpClient) { }

  inviaAccessToken(access_token: string): Observable<any> {
    // Creazione del corpo della richiesta
    const body = { "access_token": access_token };

    // Impostazione delle intestazioni della richiesta (opzionale)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Tipo di contenuto JSON
    });

    // Esegui la richiesta POST
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}
