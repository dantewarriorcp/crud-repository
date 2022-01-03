import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from './storage.service';

@Injectable()
export class TaskService {
        
    constructor(private http: HttpClient,
        private storageService:StorageService) { 
    }
    
    aux=JSON.stringify(this.storageService.getCurrentToken());
    token5=`Bearer ${JSON.parse(this.aux)}`;
    
    public header=new HttpHeaders({
        'Authorization': `Bearer ${JSON.parse(this.aux)}`,
        'Content-Type': 'application/json'
    });
    
    public API='https://api-nodejs-todolist.herokuapp.com';
    addTask(form: any): Observable<any> {
       
        return this.http.post(this.API+'/task/', {"description": form.description},{headers: this.header})
    }
    getAllTask(): Observable<any> {
        
        return this.http.get(this.API+'/task/',{headers: this.header})
    }
    updateTask(id:any):Observable<any>{
        
        return this.http.put(this.API+'/task/'+id,{"completed": true},{headers: this.header})
    }
    DeleteTask(id:any):Observable<any>{
        return this.http.delete(this.API+'/task/'+id,{headers: this.header})
    }
    Logout(): Observable<any> {
        return this.http.post(this.API+'/user/logout',{},{headers: this.header} );
    }
    
}
