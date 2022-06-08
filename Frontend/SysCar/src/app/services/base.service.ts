import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injector, Injectable } from '@angular/core';
import { IBaseService } from '../interfaces/base.IService';
import { BaseModel } from '../models/base.model';
import { ToastrService } from 'ngx-toastr';
import { MessageEnum } from '../enums/message.enum';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends BaseModel> implements IBaseService<T>  {
  protected http?: HttpClient;
  protected clientManagerContext?: any;
  protected currentUser = JSON.parse(localStorage.getItem('currentUserDM'));

  protected toastr?: ToastrService;
  protected headers = new HttpHeaders();
  protected numberPostToAut?: number;
  protected startNewCredential?: any;
  protected scope?: any;
  protected versionAPI = 1;




  constructor() { }

  // constructor(
  //   protected apiPath?: string,
  //   protected injector?: Injector,
  //   protected jsonDataToResourceFn?: (jsonData: any) => T,
  //   protected useMemoryDB = false,
  //   protected versionAPI = 1) {

  //   this.headers = this.headers.append('Content-Type', 'application/json');
  //   this.headers = this.headers.append('app-token-bus', 'true');

  //   this.toastr = injector.get(ToastrService);
  //   this.http = injector.get(HttpClient);
  //   this.scope = (this.apiPath.replace(/([A-Z])/g, (match) => `${match}`).replace(/^./, (match) => match.toUpperCase())).replace(/\s/g, '');
  // }

  //#region M E T H O D S    P U B L I C O S

  authentication(resource: T): Observable<T> {
    const entity = JSON.stringify(resource);
    const textJson = '{ "Header"  : "ASK"  , "Version" : ' + this.versionAPI + ' , "Action" : "' + this.scope + '" , ' + entity.replace('{', '').replace('}', '') + '}'

    // return this.http.request('POST', environment.baseServerURL + '/login',
    return this.http.request('POST', environment.baseUrl1 + '/login',
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: textJson
      }).pipe(map(c => {
        return this.logAndDispplayErroAPI(c) === undefined ? undefined : this.JsonDataToResource(c)
      }), catchError(this.handlerError));
  }

  create(resource: T): Observable<T> {
    const entity = JSON.stringify(resource);
    const textJson = '{ "Header"  : "ASK"  , "Version" : ' + this.versionAPI + ' , "Action" : "' + this.scope + '", "body" : ' + entity + '}'
    // return this.http.request('POST', environment.baseServerURL,
    return this.http.request('POST', environment.baseUrl1,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: textJson
      }).pipe(map(c => {
        return this.logAndDispplayErroAPI(c) === undefined ? undefined : c;
      }), catchError(this.handlerError));
  }

  update(resource: T): Observable<T> {
    const entity = JSON.stringify(resource);
    const textJson = '{ "Header"  : "ASK"  , "Version" : ' + 1 + ' , "Action" : "' + this.scope + '" , "body" : ' + entity + '}'

    // return this.http.request('PUT', environment.baseServerURL,
    return this.http.request('PUT', environment.baseUrl1,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: textJson
      }).pipe(map(c => {
        return this.logAndDispplayErroAPI(c) === undefined ? undefined : c;
      }), catchError(this.handlerError));
  }

  delete(resource: T): Observable<T> {
    const textJson = '{ "Header"  : "ASK"  , "Version" : ' + 1 + ' , "Action" : "' + this.scope + '" , "Path" : ["' + resource.id + '"]}';

    // return this.http.request('DELETE', environment.baseServerURL,
    return this.http.request('DELETE', environment.baseUrl1,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: textJson
      }).pipe(map(c => {
        return this.logAndDispplayErroAPI(c) === undefined ? undefined : c;
      }), catchError(this.handlerError));
  }

  getById(resource: T): Observable<T> {
    // return this.http.request('GET', environment.baseServerURL + '/ASK/1/' + this.scope + '/' + resource.id,
    return this.http.request('GET', environment.baseUrl1 + '/ASK/1/' + this.scope + '/' + resource.id,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).pipe(map(c => {
        return this.logAndDispplayErroAPI(c) === undefined ? undefined : this.JsonDataToResource(c)
      }), catchError(this.handlerError));
  }

  getAll(resource?: T): Observable<T[]> {
    if (typeof resource === 'object' && 'isFilter' in resource) {
      if (resource.isFilter) {
        const model = JSON.stringify(resource);
        // return this.http.request('POST', environment.baseServerURL + '/query/ASK/1/' + this.scope,
        return this.http.request('POST', environment.baseUrl1 + '/query/ASK/1/' + this.scope,
          { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: model })
          .pipe(map(c => {
            return this.logAndDispplayErroAPI(c) === undefined ? undefined : this.JsonDataToResources(c)
          }), catchError(this.handlerError));
      } else {
        // return this.http.request('GET', environment.baseServerURL + '/ASK/1/' + this.scope + '/',
        return this.http.request('GET', environment.baseUrl1 + '/ASK/1/' + this.scope + '/',
          { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
          .pipe(map(c => {
            return this.logAndDispplayErroAPI(c) === undefined ? undefined : this.JsonDataToResources(c)
          }), catchError(this.handlerError));
      }
    } else {
      // return this.http.request('GET', environment.baseServerURL + '/ASK/1/' + this.scope + '/',
      return this.http.request('GET', environment.baseUrl1 + '/ASK/1/' + this.scope + '/',
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
        .pipe(map(c => {
          return this.logAndDispplayErroAPI(c) === undefined ? undefined : this.JsonDataToResources(c)
        }), catchError(this.handlerError));
    }
  }

  //#endregion

  //#region  M E T H O D S    P R I V A T E  - [  a s y n c ]

  private async getCredential() {
    let iobj: any;

    const promise = await new Promise((resolve, reject) => {
      // const apiURL = environment.baseAuthURL + 'Permission/GetCredentialsToAuthentication'
      const apiURL = environment.baseAuthURL + 'Permission/GetCredentialsToAuthentication'
      this.http.get<any>(apiURL)
        .toPromise()
        .then(
          async (res: any) => {
            iobj = await this.getAuthentication(res.credentials)
            resolve(res);
          })
    });

    return iobj
  }

  private async getAuthentication(credentials: string) {
    const promiseAut = await new Promise((resolve, reject) => {
      const headers = new HttpHeaders();
      const data = `"${credentials}"`;
      // const url = `${environment.baseServerURL}Authentication`;
      const url = `${environment.baseServerURL}Authentication`;
      this.http.post<any>(url, data, { headers: headers })
        .toPromise()
        .then(item => { })
        .catch(error => {
          // #update local storage user.
          this.currentUser.tokenAppValid = true;
          this.currentUser.tokenApp = error.error.text;
          localStorage.setItem('currentUserDM', JSON.stringify(this.currentUser));
          resolve(error)
        });
    });

    return promiseAut;
  }

  //#endregion

  //#region  M E T H O D S    P R I V A T E  - [ NO async ]

  private logAndDispplayErroAPI(err: any): any {
    if (err) {
      if (err.resultCode) {
        switch (err.resultCode) {
          case 1: {
            return 'OK';
          }
          case 0: { // *# get error expected to front for especific implementations.
            this.toastr.warning(err.resultMessage, 'Warning');
            return undefined;
          }
          case -1: { // *# error fatal and abort any process. Return null for any object
            this.toastr.error(MessageEnum.Options.ErroFatalReturnAPIBUS, 'Error');
            return undefined;
          }
          default: {
            this.toastr.error(err.resultMessage, 'Error');
            return undefined;
          }
        }
      } else {
        this.toastr.error(MessageEnum.Options.ErroFatalReturnAPIBUS, 'Error');
        return undefined;
      }
    } else {
      this.toastr.error(MessageEnum.Options.ErroFatalReturnAPIBUS, 'Error');
      return undefined;
    }
  }

  //#endregion  

  //#region M E T H O D S  -  P R O T E C T E D

  protected JsonDataToResources(jsonData: any): T[] {
    const resources: T[] = [];
    const data = jsonData['body'];
    if (jsonData.resultCode === 1) {
      if (data) {
        //data.forEach(element => resources.push(this.jsonDataToResourceFn(element)));
      } else {
        this.toastr.error(MessageEnum.Options.ErroFatalReturnAPIBUS, 'Error');
      }
    }

    return resources;
  }

  protected JsonDataToResource(jsonData: any): T {
    return jsonData; //this.jsonDataToResourceFn(jsonData['body']);
  }

  protected handlerError(error: HttpErrorResponse): Observable<any> {
    if (error.status !== undefined) {
      switch (error.status) {
        case 400:
          this.toastr.error(MessageEnum.Options.Erro400, 'Error');
          console.log(MessageEnum.Options.Erro400);
          break;

        case 401:
          this.toastr.error(MessageEnum.Options.Erro401, 'Error');
          console.log(MessageEnum.Options.Erro401);
          break;

        case 403:
          this.toastr.error(MessageEnum.Options.Erro403, 'Error');
          console.log(MessageEnum.Options.Erro403);
          break;

        case 405:
          this.toastr.error(MessageEnum.Options.Erro405, 'Error');
          console.log(MessageEnum.Options.Erro405);
          break;

        case 500:
          this.toastr.error(MessageEnum.Options.Erro500, 'Error');
          console.log(MessageEnum.Options.Erro500);
          break;

        case 502:
          this.toastr.error(MessageEnum.Options.Erro502, 'Error');
          console.log(MessageEnum.Options.Erro502);
          break;

        case 503:
          this.toastr.error(MessageEnum.Options.Erro503, 'Error');
          console.log(MessageEnum.Options.Erro503);
          break;

        case 504:
          this.toastr.error(MessageEnum.Options.Erro504, 'Error');
          console.log(MessageEnum.Options.Erro504);
          break;

        case 505:
          this.toastr.error(MessageEnum.Options.Erro505, 'Error');
          console.log(MessageEnum.Options.Erro505);
          break;

        default:
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            this.toastr.error('An error occurred: ' + error.error.message, 'Error');
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            this.toastr.error('Backend returned code ' + error.status + ' , body was: ' + error.error, 'Error');

            // Return an observable with a user-facing error message.
            console.log('Something bad happened; please try again later.');
            console.error(error);
          }
      }
    }

    return throwError(error);
  }

  //#endregion
}
