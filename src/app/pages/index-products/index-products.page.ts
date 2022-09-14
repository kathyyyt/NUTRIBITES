import { Component, OnInit } from '@angular/core';
import { Products, Modals, IndexProductsService } from './index-products.service';

@Component({
  selector: 'app-index-products',
  templateUrl: './index-products.page.html',
  styleUrls: ['./index-products.page.scss'],
})
export class IndexProductsPage implements OnInit {
  products: Products[];
  modals: Modals[];
  constructor(
    private service: IndexProductsService
  ) { }

  ngOnInit() {
     this.service.getAllProducts().subscribe(response => {
      this.products = response;
    })

    this.service.getAllModals().subscribe(response => {
      this.modals = response;
    })

  }

}
