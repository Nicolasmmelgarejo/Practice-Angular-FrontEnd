import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AbjectsComponent } from './components/abjects/abjects.component';
import { ObsectsnComponent } from './components/abjects/obsectsn/obsectsn.component';
import { ObjectslistComponent } from './components/abjects/objectslist/objectslist.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SingInComponent } from './components/sing-in/sing-in.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AbjectsComponent,
    ObsectsnComponent,
    ObjectslistComponent,
    FooterComponent,
    SingInComponent,
    LogInComponent,
    NavbarComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
