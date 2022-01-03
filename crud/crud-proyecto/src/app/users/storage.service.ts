 import {Injectable} from "@angular/core";
 import { Router } from '@angular/router';
 import {Sesion} from "../modelos/sesion.model";
 import {User} from "../modelos/user.model";
 
 @Injectable()
 export class StorageService {
 
   public localStorageService;
   private currentSession : Sesion ;
 
   constructor(private router: Router) {
     this.localStorageService = localStorage;
     this.currentSession = this.loadSessionData();
   }
 
   setCurrentSession(session: Sesion): void {
     this.currentSession = session;
     this.localStorageService.setItem('currentUser', JSON.stringify(session));
   }
 
   loadSessionData(): Sesion{
     var sessionStr = this.localStorageService.getItem('currentUser');
     return (sessionStr) ? <Sesion> JSON.parse(sessionStr) : null;
   }
 
   getCurrentSession(): Sesion {
     return this.currentSession;
   }
 
   removeCurrentSession(): void {
     this.localStorageService.removeItem('currentUser');
     this.currentSession = null;
   }
 
   getCurrentUser(): User {
     var session: Sesion = this.getCurrentSession();
     return (session && session.user) ? session.user : null;
   };
 
   isAuthenticated(): boolean {
     return (this.getCurrentToken() != null) ? true : false;
   };
 
   getCurrentToken(): string {
     var session = this.getCurrentSession();
     return (session && session.token) ? session.token : null;
   };
 
   logout(): void{
     this.removeCurrentSession();
     
   }
 
 }
 