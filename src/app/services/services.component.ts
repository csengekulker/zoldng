import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import servicesJson from './services.json'
import { Router } from '@angular/router';
import { EmitterService } from '../shared/emitter.service';
import { PassService } from '../shared/pass.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private api: ApiService,
    private pass: PassService,
    private emitter: EmitterService,
    private router: Router
  ) { }

  services!: any
  fetchedServices !: any
  fetchedTypes!:any

  // FIXME: autoload dur and price also when redirected

  onClick(event: any) {
    let sid = event.path[7].id
    let tid = event.path[3].id
    
    this.pass.setService(sid)
    this.pass.setType(tid)
    this.router.navigate(['/booking'])

    this.emitter.onButtonClick()

  }

  ngOnInit(): void {    
    this.services = servicesJson.services

    this.api.fetchServices().subscribe({
        next: (data:any) => {
          this.fetchedServices = data.data
          for(let i = 0; i < this.fetchedServices.length; i++) {
            this.services[i].id = this.fetchedServices[i].id
            this.services[i].name = this.fetchedServices[i].name
          }
        },
        error: (err:any) => {
          console.log("Hiba, nincs adat!");
        }
    })

    this.api.fetchTypes().subscribe({
      next: (data:any) => {
        this.fetchedTypes = data.data
      },
      error: (err:any) => {
        console.log("Hiba, nincs adat!");
      }
  })

  }

}

