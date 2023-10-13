import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {MeminiAwardApiService} from "./memini-award-api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isTokenPresent(): boolean{
    return !!localStorage.getItem('jwt_token')
  }
  getToken(): string | null{
    return localStorage.getItem('jwt_token');
  }

  setToken(token: string){
    localStorage.setItem('jwt_token', token);
  }

  flush(){
    localStorage.removeItem('jwt_token')
  }
}
