import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductsDetailsComponent } from "./products-details/products-details.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/details/:id", component: ProductsDetailsComponent },
  { path: "", redirectTo:"home", pathMatch:"full"},
  { path: "**", component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [BrowserModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    Ng2CarouselamosModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
