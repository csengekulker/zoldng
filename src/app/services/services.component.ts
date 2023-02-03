import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  products!: any
  constructor(private api: ApiService, private emitter: EmitterService) { }

  title = 'Massage Terapies'

  public services!: Service[]

  path: string = '../assets/images/vert.png';
  alttext: string = 'A kép leírása';

  getProducts() {
    this.api.getProducts().subscribe({
      next: data => {
        this.products = data.data
        console.log(data.data); // sendResponse
        console.log(this.products);

        
      },
      error: err => {
        console.log("Hiba, nincs termek!");
        
      }
    })
  }

  sendDetails() {
    console.log("mukodik");
    let type = 'type'
    let duration = 30
    let price = 2345

    let details = {
      type: type,
      duration: duration,
      price: price
    }

    
  }

  ngOnInit(): void {

    this.emitter.event.subscribe( ()=> {
      this.sendDetails()
    })

    // this.getProducts()

    // console.log(this.products);
    

    // let data = {
    //   name: "billentyűzet",
    //   itemNumber: "cab34",
    //   count: 25,
    //   price: 8
    // };

    // this.api.addProducts(data)

    this.services = [
      {
        name: 'Sved',
        description: 'Phasellus sed sem sed ligula sagittis consequat et at est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac eros est. Nunc nec fermentum libero, et suscipit erat. Quisque et libero ipsum. Ut ac arcu consequat, egestas quam sit amet, tempor Phasellus sed sem sed ligula sagittis consequat et at est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac eros est. Nunc nec fermentum libero, et suscipit erat. Quisque et libero ipsum. Ut ac arcu consequat, egestas quam sit amet, tempor sapien.Phasellus sed sem sed ligula sagittis consequat et at est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac eros est. Nunc nec fermentum libero, et suscipit erat. Quisque et libero ipsum. Ut ac arcu consequat, egestas quam sit amet, tempor sapien.sapien.',
        dos: [
          'Pellentesque habitant morbi tristique senectus et netus',
          'Pellentesque habitant morbi tristique senectus et netus'
        ],
        donts: [
          'Curabitur pellentesque facilisis nisl non facilisis',
          'Pellentesque habitant morbi tristique senectus et netus',
          'Curabitur pellentesque facilisis nisl non facilisis'
        ],
        variants: [
          {
            name: 'full body',
            duration: 45,
            cost: 2345
          },
          {
            name: 'back | neck | shoulders',
            duration: 30,
            cost: 1234
          }
        ],
        imagePath: '../assets/images/vert.png'
      }
    ]
  }


}

export interface Variant {
  name: string,
  cost: number
  duration: number,
}

export interface Service {
  name: string,
  description: string,
  dos: string[],
  donts: string[]
  variants: Variant[],
  imagePath: string
}


