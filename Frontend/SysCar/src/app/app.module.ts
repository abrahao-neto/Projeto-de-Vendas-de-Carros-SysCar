import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductRead2Component } from './components/product/product-read2/product-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RedDirective } from './directives/red.directive';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ForDirective } from './directives/for.directive';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { CarrosReadComponent } from './pages/carros/carros-read/carros-read.component';
import { CarrosDialogCreateComponent } from './pages/carros/carros-dialog-create/carros-dialog-create.component';
import { CarrosDialogUpdateComponent } from './pages/carros/carros-dialog-update/carros-dialog-update.component';
import { CarrosDialogDeleteComponent } from './pages/carros/carros-dialog-delete/carros-dialog-delete.component';
import { CarrosViewComponent } from './views/carros-view/carros-view.component';
import { CoresReadComponent } from './pages/cores/cores-read/cores-read.component';
import { TiposCarroReadComponent } from './pages/tiposcarro/tipos-carro-read/tipos-carro-read.component';
import { VendasCarroReadComponent } from './pages/vendascarro/vendas-carro-read/vendas-carro-read.component';
import { CoresDialogCreateComponent } from './pages/cores/cores-dialog-create/cores-dialog-create.component';
import { CoresDialogDeleteComponent } from './pages/cores/cores-dialog-delete/cores-dialog-delete.component';
import { CoresDialogUpdateComponent } from './pages/cores/cores-dialog-update/cores-dialog-update.component';
import { TiposcarroDialogCreateComponent } from './pages/tiposcarro/tiposcarro-dialog-create/tiposcarro-dialog-create.component';
import { TiposcarroDialogDeleteComponent } from './pages/tiposcarro/tiposcarro-dialog-delete/tiposcarro-dialog-delete.component';
import { TiposcarroDialogUpdateComponent } from './pages/tiposcarro/tiposcarro-dialog-update/tiposcarro-dialog-update.component';
import { VendascarroDialogCreateComponent } from './pages/vendascarro/vendascarro-dialog-create/vendascarro-dialog-create.component';
import { VendascarroDialogUpdateComponent } from './pages/vendascarro/vendascarro-dialog-update/vendascarro-dialog-update.component';
import { VendascarroDialogDeleteComponent } from './pages/vendascarro/vendascarro-dialog-delete/vendascarro-dialog-delete.component';
import { CoresViewComponent } from './views/cores-view/cores-view.component';
import { TiposCarroViewComponent } from './views/tipos-carro-view/tipos-carro-view.component';
import { VendasCarroViewComponent } from './views/vendas-carro-view/vendas-carro-view.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductRead2Component,
    RedDirective,
    ForDirective,
    ProductUpdateComponent,
    ProductDeleteComponent,
    CarrosReadComponent,
    CarrosDialogCreateComponent,
    CarrosDialogUpdateComponent,
    CarrosDialogDeleteComponent,
    CarrosViewComponent,
    CoresReadComponent,
    TiposCarroReadComponent,
    VendasCarroReadComponent,
    CoresDialogCreateComponent,
    CoresDialogDeleteComponent,
    CoresDialogUpdateComponent,
    TiposcarroDialogCreateComponent,
    TiposcarroDialogDeleteComponent,
    TiposcarroDialogUpdateComponent,
    VendascarroDialogCreateComponent,
    VendascarroDialogUpdateComponent,
    VendascarroDialogDeleteComponent,
    CoresViewComponent,
    TiposCarroViewComponent,
    VendasCarroViewComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule


  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
