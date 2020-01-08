import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductDetailsService } from "../_services/product-details.service";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-products-details",
  templateUrl: "./products-details.component.html",
  styleUrls: ["./products-details.component.css"],
  providers: [NgbCarouselConfig]
})
export class ProductsDetailsComponent implements OnInit {
  id: number;
  loading = true;
  private sub: any;
  productDetail: any[] = [];
  imagesList: Array<any> = [];
  description: string = "";

  constructor(
    private route: ActivatedRoute,
    private productsDetailsService: ProductDetailsService,
    config: NgbCarouselConfig,
    private spinner: NgxSpinnerService
  ) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  getProductDetails() {
    this.spinner.show();
    this.productsDetailsService.getProductsData(this.id).subscribe(
      next => {
        this.productDetail = next.products;
        this.imagesList = this.productDetail[0].images;

        this.description = this.productDetail[0].localized_names[0].full_description;
        
        console.log(this.imagesList);
        this.loading = false;
      },
      err => {
        console.log(err);
      }
    );
  }

  htmlToText(s) {
    let l = s.length;

    for (let i = 0; i < l; i++) {
      if (s[i] == "<" && (s[i + 1] == "p" || s[i + 1] == "/")) {
        i += 2;
        continue;
      } else if (s[i] == "<" && s[i + 1] == "b" && s[i + 2] == "r") {
        debugger;
        this.description += "\n";
        i += 6;
        continue;
      } else {
        if (l - 1 == i) continue;
        this.description += s[i];
      }
    }

    console.log(this.description);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];

      console.log(this.id);
    });
    this.getProductDetails();
  }
}
