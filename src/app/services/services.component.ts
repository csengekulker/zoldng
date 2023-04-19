import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import servicesJson from './services.json'
import { Router } from '@angular/router';
import { EmitterService } from '../shared/emitter.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private api: ApiService,
    private emitter: EmitterService,
    private router: Router
  ) { }

  services!: any
  fetchedServices !: any
  fetchedTypes!:any

  onClick(event: any) {
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

