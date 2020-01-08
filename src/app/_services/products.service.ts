import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsList(p):Observable<any>{
    const url = "https://nopshopapi.azurewebsites.net/api/products/?limit=10&page=" + p + "&Fields=id,localized_names,price,images,show_on_home_page,display_order&category_id=1";
    return this.http.get(url);
  }
}
