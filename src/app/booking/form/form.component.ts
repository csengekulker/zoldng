import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators as V } from '@angular/forms';
import { EmitterService } from 'src/app/shared/emitter.service';
import { ApiService } from 'src/app/shared/api.service';
import { PassService } from 'src/app/shared/pass.service';

@Component({
  selector: 'booking-form',
  templateUrl: './form.component.html',
  styleUrls: ['../booking.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private api: ApiService,
    private pass: PassService,
    private emitter: EmitterService,
    private build: FormBuilder) { }

  selectService!:any
  selectType!:any
  selectApt!:any

  services!: any; types!: any
  form!: FormGroup
  appointments!: any
  fitAppointments: any[] = []

  // aptId!: number
  pickedService: any = ''
  pickedType: any = ''
  pickedApt:any = ''

  bookingId!:number

  autoSelect() {    
    // this.pickedType = ''
    this.pass.currentService.subscribe({
      next: (sid:number) => {
        this.pickedService = this.services[sid]
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })

    this.pass.currentType.subscribe({
      next: (tid:number) => {
        // this.selectType = tid
        console.log('type id', tid);
        this.typePicked(tid - 1)
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }

  collectPersonalDetails(): any {

    const target = this.form.value

    let fullName: string = target.fullName!
    let dob: string = target.dob!
    let email: string = target.email!
    let phone: string = target.phone!
    let zipCode: number = target.zipCode!
    let city: string = target.city!
    let address:string = target.address!

    let fullAddress:string = `${zipCode} ${city}, ${address}`

    let data = {
      fullName,
      dob,
      email,
      phone,
      fullAddress
    }

    return data
  }

  filterApts() {
    this.fitAppointments = []

    this.appointments.forEach((apt: any) => {
      let start = apt.start.split(':')
      let startHour = Number(start[0])

      let end = apt.end.split(':')
      let endHour = Number(end[0])

      let startMin = Number(start[1])
      let endMin = Number(end[1])

      let minDiff = endMin - startMin

      let aptDuration = ((endHour - startHour) * 60) + minDiff

      if (aptDuration >= this.pickedType.duration) {
        this.fitAppointments.push(apt)
      }

    });

  }

  servicePicked(event:any) { 
    this.pickedService = this.services[event.target.value - 1]
  }

  typePicked(event?: any, id?:number) {    

    if (event) {
      this.pickedType = this.types[event.target.value - 1]
    } else if (id) {
      console.log(id);
      this.pickedType = this.types[id]
      
    }
    this.filterApts()

  }

  aptPicked(event:any) {
    this.pickedApt = this.fitAppointments[this.form.value.aptId - 1]    
  }

  onSubmit() { 
    const target = this.form.value
    const modal = document.querySelector('.modal-body') 
    const header = document.querySelector('.modal-title')
    const submit = document.querySelector('.submitBtn')

    let clientData = this.collectPersonalDetails()
    console.log(clientData)
    // modal.innerHTML = ''

    if (target.accept == false && modal) {
      modal.innerHTML = 'Kérjük, fogadd el a feltételeket.'
    } else {  

    this.api.sendClientDetails(clientData).subscribe({
      next: (data: any) => {
        let clientId = data.data.id

        if (data.success) {

          let bookingData = {
            service_id: target.serviceId,
            type_id: target.typeId,
            client_id: clientId, 
            appointment_id: target.aptId
          } 
          
          this.api.sendReservation(bookingData).subscribe({
            next: (data:any) => {
              if (data.success && header && modal && submit) {
                this.bookingId = data.data.id
                header.innerHTML = "Sikeres foglalás"
                modal.innerHTML = 'Check your email'
                submit.remove()
                this.form.reset()
              }
            },
            error: (err: any) => {
              console.log(err);
              
              if (modal !=null) {                
                let e: keyof typeof err.error.message
                for (e in err.error.message) {
                  let v = err.error.message[e]
                  console.log(v[0]);
                  modal.innerHTML += (v[0] + '<br>')
                }
              }
            }
          })
        }
      },
      error: (err: any) => {
        console.log(err);
        
        if (modal !=null) {
          modal.innerHTML = ''
          let e: keyof typeof err.error.message
          for (e in err.error.message) {
            let v = err.error.message[e]
            console.log(v[0]);
            modal.innerHTML += (v[0] + '<br>')            
          }
        }
      }
    })}
  }

  fetchOpenApts(): any {
    this.api.fetchOpenApts().subscribe({
      next: (data: any) => {
        let appointments = data.data

        return appointments
      }
    })
  }

  ngOnInit(): void {
    // this.autoSelect()

    this.emitter.event.subscribe(() => {
      this.autoSelect()
    })

    this.api.fetchOpenApts().subscribe({
      next: (data: any) => {
        this.appointments = data.data

        this.appointments.forEach((apt: any) => {
          apt.date = apt.date.replaceAll('-', '. ')
          apt.start = apt.start.substring(0, 5)
          apt.end = apt.end.substring(0, 5)
        })
        console.log('Open:', this.appointments);
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.api.fetchServices().subscribe({
      next: (data: any) => {
        this.services = data.data
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.api.fetchTypes().subscribe({
      next: (data: any) => {
        this.types = data.data
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.form = this.build.group({
      serviceId: [V.required],
      typeId: [V.required],
      aptId: [V.required],
      fullName: ['', V.required],
      dob: ['', V.required, V.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)],
      email: ['', [V.required, V.email]],
      phone: ['', V.required, V.pattern('[- +()0-9]+')],
      zipCode: ['', V.required],
      city: ['', V.required, V.pattern('[a-zA-Z]')],
      address: ['', V.required],
      fullAddress: ['', V.required],
      accept: [false, V.requiredTrue]
    })
  }

}
