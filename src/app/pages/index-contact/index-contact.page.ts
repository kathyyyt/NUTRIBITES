import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-contact',
  templateUrl: './index-contact.page.html',
  styleUrls: ['./index-contact.page.scss'],
})
export class IndexContactPage {

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
