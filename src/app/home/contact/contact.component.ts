import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../../shared/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm !: FormGroup
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {}

  collectMessageDetails():any {
    const target = this.contactForm.value

    let name:string = target.name!
    let email:string = target.email!
    let subject:string = target.subject!
    let message:string = target.message

    let data = {
      email: email,
      name: name,
      subject: subject,
      body: message
    }    

    return data

   }

  onSubmit() {
    let messageData = this.collectMessageDetails()   
    const modal = document.querySelector('.modal-body') 
    const header = document.querySelector('.modal-title')

    this.api.sendMessageDetails(messageData).subscribe({
      next: (data: any) => {

        if (data.success) {

          if (modal !=null && header != null ) {
            header.innerHTML = "Üzenet elküldve!"
            modal.innerHTML = 'Hamarosan jelentkezünk.'
          }
          
          this.contactForm.reset()
        }
      },
      error: (err: any) => {
        if (modal !=null && header != null) {
          modal.innerHTML = ''
          header.innerHTML = 'Sikertelen küldés'
          let e: keyof typeof err.error.message
          for (e in err.error.message) {
            let v = err.error.message[e]
            modal.innerHTML += (v[0] + '<br>') 
          }
        }
      }
    })
    
  }


  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      name: ['', V.required],
      email: ['', [V.required, V.email]],
      subject: ['', V.required],
      message: ['', V.required]
    })
  }

}