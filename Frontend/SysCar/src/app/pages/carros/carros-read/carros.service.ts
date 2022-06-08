import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
//import { Product } from "./product.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { CarrosModel } from "src/app/models/carros/carros.model";

@Injectable({
    providedIn: "root",
})
export class CarrosService {
    baseUrl = "http://localhost:3001/carros";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    create(carrosModel: CarrosModel): Observable<CarrosModel> {
        return this.http.post<CarrosModel>(this.baseUrl, carrosModel).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    read(): Observable<[]> {
        return this.http.get<CarrosModel[]>(this.baseUrl).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    readById(id: number): Observable<CarrosModel> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<CarrosModel>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    update(carrosModel: CarrosModel): Observable<CarrosModel> {
        const url = `${this.baseUrl}/${carrosModel.id}`;
        return this.http.put<CarrosModel>(url, carrosModel).pipe(
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
