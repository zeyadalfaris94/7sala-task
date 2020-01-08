import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  getProductsData(id): Observable<any> {
    const url = "https://nopshopapi.azurewebsites.net/api/products/" + id;
    return this.http.get(url);
  }
}
