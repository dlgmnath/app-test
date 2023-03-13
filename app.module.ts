import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent} from './Components/form/form.component';
import { NavBarComponent } from './Components/navbar/navbar.component' 
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavBarComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    NavBarComponent
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
