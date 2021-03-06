//this is how we import external modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//this is how we import internal modules
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

//this is how we declare which modules we would like to use from the above imported modules
@NgModule({
  //imports is used for external/3rd party directives, components and pipes
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //declarations is used for our directives, components and pipes
  declarations: [
    AppComponent, 
    ProductListComponent,
    ProductFilterPipe,
    StarComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
