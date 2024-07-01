import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jobApplicationForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    job: new FormControl(''),
    age: new FormControl('')
  });

  onSubmit() {
    // Handle your form submission logic here
    console.log(this.jobApplicationForm.value);
  }
}
