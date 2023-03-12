import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form!: NgForm;

  visiblePassword: boolean = false;

  submitForm() {
    console.log(this.form.controls['email'])
  }

}
