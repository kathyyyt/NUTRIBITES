import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private service: SignupService
  ) { }

  ngOnInit() {}

  onSubmit(form: NgForm) {
    const user = form.value;
    this.service.create(user).subscribe(response => console.log(response))
  }
}
