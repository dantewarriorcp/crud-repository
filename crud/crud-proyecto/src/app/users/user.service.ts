import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class UsersService {
    
    constructor(private http: HttpClient) { }
    private API='https://api-nodejs-todolist.herokuapp.com';
    login(form: any): Observable<any> {
        return this.http.post(this.API+'/user/login', {
            "email": form.username,
            "password": form.password
        });
    }
    registernew(form: any): Observable<any> {
        return this.http.post(this.API+'/user/register', {
            "name": form.username,
            "email": form.email,
            "password": form.password,
            "age": form.age
        });
    }
}
