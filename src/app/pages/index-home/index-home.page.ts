import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.page.html',
  styleUrls: ['./index-home.page.scss'],
})
export class IndexHomePage {

  constructor(
    private router: Router
  ) { }

  homeClicked() {
    this.router.navigate(['/index-home'])
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
