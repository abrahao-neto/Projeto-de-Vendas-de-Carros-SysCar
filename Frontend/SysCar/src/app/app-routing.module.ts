import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { CarrosViewComponent } from './views/carros-view/carros-view.component';
import { CoresViewComponent } from './views/cores-view/cores-view.component';
import { TiposCarroViewComponent } from './views/tipos-carro-view/tipos-carro-view.component';
import { VendasCarroViewComponent } from './views/vendas-carro-view/vendas-carro-view.component';
import { CarrosDialogUpdateComponent } from './pages/carros/carros-dialog-update/carros-dialog-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  }, {
    path: "carros",
    component: CarrosViewComponent
  }, {
    path: "cores",
    component: CoresViewComponent
  }, {
    path: "tipos-carro",
    component: TiposCarroViewComponent
  }, {
    path: "vendas-carro",
    component: VendasCarroViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
