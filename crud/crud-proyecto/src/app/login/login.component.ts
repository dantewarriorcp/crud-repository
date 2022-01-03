 import {Component, OnInit} from "@angular/core";
 import {Validators, FormGroup, FormBuilder} from "@angular/forms";
 import {Router} from "@angular/router";
 import {UsersService} from "../users/user.service";
 import {StorageService} from "../users/storage.service";
 
 @Component({
   selector: 'login',
   templateUrl: 'login.component.html'
 })
 
 export class LoginComponent implements OnInit {
   public loginForm: FormGroup;
   
   constructor(private formBuilder: FormBuilder,
               private serviciologin : UsersService,           
               private storageService: StorageService,
               private router: Router
               ) { 
   }
   
   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    
    localStorage.clear();
   }
   submitLogin(){
     
     this.serviciologin.login(this.loginForm.value).subscribe(
       data =>{    
        this.storageService.setCurrentSession(data);
        this.router.navigate(['/home']);  
      })
      
   }
   registernew(){
    this.router.navigate(['/register']);  
   }
    
   
 }
 