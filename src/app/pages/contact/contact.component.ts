import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contactForm! : FormGroup; // Formulario de contacto el signo de admiracion es para decir que no es nulo o que nos comprometemos a que nunca va a ser null 

  constructor(private formBuilder: FormBuilder) { 

    this.contactForm = this.formBuilder.group({
      firstName: ['' ,Validators.required],
      lastName: ['',Validators.required ],
      username: ['', [Validators.required, Validators.minLength(4)]], 
      city: ['', Validators.required], 
      state: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]], esta seria la forma de validar un email 
    });

  }

  hasErrors(field: string, typeError: string){
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

  ngOnInit(): void {
    
  }

  enviar(event: Event){
    event.preventDefault();
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }

}
