import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../_services/products.service";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { ProductDetailsService } from "../_services/product-details.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {

  
  loading = true;
  notEmptyPost = true;
  notScrolly = true;
  page = 1;

  productsList: any[] = [];

  constructor(private productsService: ProductsService,
    private spinner: NgxSpinnerService) {
  }

  getProducts() {
    this.productsService.getProductsList(this.page).subscribe(
      next => {
        this.page++;
        this.loading = false;
        
        const newProducts = [...next.products];
        this.spinner.hide();
        if(newProducts.length === 0){
          this.notEmptyPost = false;
        }
        this.productsList && this.productsList.push(...newProducts);
        
        this.notScrolly = true; 
      },
      err => {
        console.log(err);
      }
    );
  }

  onScroll(){
    if(this.notScrolly && this.notEmptyPost){
      this.spinner.show();
      this.notScrolly = false;
      this.getProducts();
    }
  }

  ngOnInit() {
    this.getProducts();
  }
}
