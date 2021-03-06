import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { TiposCarroModel } from "src/app/models/tipos-carro/tipos-carro.model";

@Injectable({
    providedIn: "root",
})
export class TiposCarroService {
    baseUrl = "http://localhost:3001/tipos-carro";

    constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    create(tiposCarroModel: TiposCarroModel): Observable<TiposCarroModel> {
        return this.http.post<TiposCarroModel>(this.baseUrl, tiposCarroModel).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    read(): Observable<[]> {
        return this.http.get<TiposCarroModel[]>(this.baseUrl).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    readById(id: number): Observable<TiposCarroModel> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<TiposCarroModel>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    update(tiposCarroModel: TiposCarroModel): Observable<TiposCarroModel> {
        const url = `${this.baseUrl}/${tiposCarroModel.id}`;
        return this.http.put<TiposCarroModel>(url, tiposCarroModel).pipe(
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
