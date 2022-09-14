import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private router: Router
  ) { }

  homeClicked() {
    this.router.navigate(['/home'])
  }

  productsClicked() {
    this.router.navigate(['/index-products'])
  }

  contactClicked() {
    this.router.navigate(['/index-contact'])
  }

  aboutClicked() {
    this.router.navigate(['/index-about'])
  }

  loginClicked() {
    this.router.navigate(['/login'])
  }

}
