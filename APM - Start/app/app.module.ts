//this is how we import external modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//this is how we import internal modules
import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';

//this is how we declare which modules we would like to use from the above imported modules
@NgModule({
  //imports is used for external/3rd party directives, components and pipes
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  //declarations is used for our directives, components and pipes
  declarations: [
    AppComponent, 
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
