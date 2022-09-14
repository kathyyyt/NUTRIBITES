import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Products {
  productid: string;
  productname: string;
  productname1: string;
  productprice: string;
  productimage: string;
}

export interface Modals {
  modalid: string;
  modalquantity: string;
  modalhealth: string;
  modalingredients: string;
}

@Injectable({
  providedIn: 'root'
})
export class IndexProductsService {

  private productUrl = 'http://localhost/nutribites-backend/api/tblproducts';
  private modalUrl = 'http://localhost/nutribites-backend/api/tblmodals';

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<[Products]>(this.productUrl);
  }

  getProduct(productid: string) {
    return this.http.get<[Products]>(this.productUrl + '/' + productid);
  }

  getAllModals() {
    return this.http.get<[Modals]>(this.modalUrl);
  }

  getModal(modalid: string) {
    return this.http.get<[Modals]>(this.modalUrl + '/' + modalid);
  }
}
