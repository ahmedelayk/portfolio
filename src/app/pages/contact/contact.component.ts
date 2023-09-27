import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    });
  }

  get controls () {
    return this.contactForm.controls;
  }

  submitForm() {
    if(this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactForm.reset();
      // toaster that i have recieved the message "Thanks, I recieve your message and i'll contact you soon"
    }
  }

}
