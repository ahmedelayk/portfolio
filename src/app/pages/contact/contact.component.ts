import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;
  isSubmitted = false;

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

  submitForm(e: Event) {
    this.isSubmitted = true;
    if(this.contactForm.valid) {
      emailjs.sendForm('service_nmo8fmg', 'template_0xbi3pa', e.target as HTMLFormElement, 'h8sbkyHvTNBnIjwMy')
      .then((result: EmailJSResponseStatus) => {
        this.isSubmitted = false;
        Swal.fire({
          customClass: {
            confirmButton: 'btn btn-success',
          },
          buttonsStyling: false,
          icon: 'success',
          title: `Thank You ${this.contactForm.value.name}!`,
          text: 'I recieved Your Message Successfully, and I will contact you soon.',
          width: '37.5rem',
          padding: '3em',
          color: 'var(--orange)',
          background: 'var(--light-color-2)',
          backdrop: `
            rgba(0,0,0,0.5)
            left top
            no-repeat
          `
        })
        this.contactForm.reset();
      }, (error) => {
        console.log(error.text);
      });
    } else {
      Swal.fire({
        customClass: {
          confirmButton: 'btn btn-danger',
        },
        buttonsStyling: false,
        icon: 'error',
        title: 'Please, sure that you fill the form right.',
        width: '37.5rem',
        padding: '3em',
        color: 'var(--bs-red)',
        background: 'var(--light-color-2)',
        backdrop: `
          rgba(0,0,0,0.5)
          left top
          no-repeat
        `
      })
    }
  }

}
