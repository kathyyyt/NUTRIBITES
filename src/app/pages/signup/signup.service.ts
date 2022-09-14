import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User {
  userid: string,
  lastname: string,
  firstname: string,
  address: string,
  contact: string,
  username: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private userUrl = 'http://localhost/nutribites-backend/api/tblusers';

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post(this.userUrl, user);
  }
}
