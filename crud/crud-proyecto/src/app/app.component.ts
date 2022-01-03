import { Component } from '@angular/core';
import { StorageService } from './users/storage.service';
import { TaskService } from './users/task.service';
import {UsersService} from "./users/user.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [StorageService,UsersService,TaskService]
})
export class AppComponent {
  title = 'crud-proyecto';
  
}
