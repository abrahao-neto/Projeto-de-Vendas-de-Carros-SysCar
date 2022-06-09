import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
//import { Product } from "./product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { CarrosModel } from "src/app/models/carros/carros.model";
import { VendasCarroModel } from "src/app/models/vendas-carro/vendas-carro.model";

@Injectable({
    providedIn: "root",
})
export class VendasCarroService {
    baseUrl = "http://localhost:3001/vendas-carro";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    create(vendasCarroModel: VendasCarroModel): Observable<VendasCarroModel> {
        return this.http.post<VendasCarroModel>(this.baseUrl, vendasCarroModel).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    read(): Observable<[]> {
        return this.http.get<VendasCarroModel[]>(this.baseUrl).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    readById(id: number): Observable<VendasCarroModel> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<VendasCarroModel>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    update(vendasCarroModel: VendasCarroModel): Observable<VendasCarroModel> {
        const url = `${this.baseUrl}/${vendasCarroModel.id}`;
        return this.http.put<VendasCarroModel>(url, vendasCarroModel).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    //   delete(id: number): Observable<Product> {
    //     const url = `${this.baseUrl}/${id}`;
    //     return this.http.delete<Product>(url).pipe(
    //       map((obj) => obj),
    //       catchError((e) => this.errorHandler(e))
    //     );
    //   }

    errorHandler(e: any): Observable<any> {
        this.showMessage("Ocorreu um erro!", true);
        return EMPTY;
    }
}
