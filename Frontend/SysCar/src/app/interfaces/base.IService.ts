import { Observable } from 'rxjs';

export interface IBaseService<T> {
    authentication(obj: T): Observable<T>;
    create(obj: T): Observable<T>;
    update(obj: T): Observable<T>;
    delete(obj: T): Observable<T>;
    getById(obj: T): Observable<T>;
    getAll(obj?: T): Observable<T[]>;
}
