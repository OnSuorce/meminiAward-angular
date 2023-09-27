import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticated(): boolean {
    return !!this.getToken();
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
