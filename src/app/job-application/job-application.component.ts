import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class JobApplicationComponent implements OnInit {
  jobApplicationForm: FormGroup;
  cvFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.jobApplicationForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      job: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(18)]],
      cv: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.cvFile = file;
      this.jobApplicationForm.patchValue({ cv: file });
    }
  }

  onSubmit(): void {
    if (this.jobApplicationForm.valid) {
      const formData = new FormData();
      formData.append('name', this.jobApplicationForm.get('name')?.value);
      formData.append('surname', this.jobApplicationForm.get('surname')?.value);
      formData.append('email', this.jobApplicationForm.get('email')?.value);
      formData.append('job', this.jobApplicationForm.get('job')?.value);
      formData.append('age', this.jobApplicationForm.get('age')?.value);
      if (this.cvFile) {
        formData.append('cv', this.cvFile);
      }

      // Handle the form submission logic, e.g., send it to a server
      console.log('Form Submitted', formData);
    } else {
      console.log('Form is not valid');
    }
  }
}
