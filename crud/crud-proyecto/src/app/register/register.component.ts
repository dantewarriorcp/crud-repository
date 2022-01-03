import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;
    
    constructor(private formBuilder: FormBuilder,
                private serviciologin : UsersService,           
                private router: Router
                ) { 
    }
    
    ngOnInit() {
     this.registerForm = this.formBuilder.group({
       username: ['', Validators.required],
       email: ['', Validators.required],
       password: ['', Validators.required],
       age: ['', Validators.required]
     });
     
     
    }
    submitRegister(){
      console.log("FORM 2",this.registerForm.value);
      this.serviciologin.registernew(this.registerForm.value).subscribe(
        data =>{    
          this.router.navigate(['/login']);  
 
        
       })
       
    }
    
     
}
