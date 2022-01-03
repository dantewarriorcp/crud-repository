import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {TaskService} from "../users/task.service";
import {StorageService} from "../users/storage.service";
import {Sesion} from "../modelos/sesion.model";
import { Task } from '../modelos/task.model'; 
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {
  public addForm: FormGroup=null;
  
  public sesion :Sesion=null;
  public localStorageService=null;
  public task:Task=null;
  public arraytareasaux:Array<Array<any>>=null;
  public var1:any=null;
  public var2:any=null;
  public conttask:number=null;
  constructor(private StorageService: StorageService,
              private formBuilder: FormBuilder,
              private TaskService :TaskService,
              private router: Router ,
              
    ) { 
      this.localStorageService = localStorage;
    }

  ngOnInit(): void {
    
    this.sesion = JSON.parse(localStorage.getItem('currentUser'));
    localStorage.setItem('usertoken',this.sesion.token);
    this.getTasks();
    this.addForm = this.formBuilder.group({
        description: ['', Validators.required],
        
    });
  }
  AddTask(){

    this.TaskService.addTask(this.addForm.value).subscribe(
      data =>{let dataResponse:any= data ;
      localStorage.setItem('task',JSON.stringify(data));
      this.task=JSON.parse(localStorage.getItem("task"));
      this.getTasks();  
     }
     )
     
     
  }
  UpdateTask(id :any){
    
    this.TaskService.updateTask(id).subscribe(
      data=>{
      this.getTasks();
    }
      
    )
  }
  
  DeleteTask(id:any){
    
    this.TaskService.DeleteTask(id).subscribe(
      data=>{
      this.getTasks();
    })
    
  }
  getTasks(){
    this.TaskService.getAllTask().subscribe(
      data=>{
        
        localStorage.setItem("arraytask",JSON.stringify(data));
        this.var2=JSON.stringify(data);
        this.var1=JSON.parse(this.var2);
        this.conttask=this.var1['count'];
        this.arraytareasaux=this.var1['data'];
        
      })
  }
  logout(){
    this.TaskService.Logout().subscribe(
      data=>{
        localStorage.clear();
        this.StorageService.logout();
        this.router.navigate(['/login']);
      }
    )
  }
}
