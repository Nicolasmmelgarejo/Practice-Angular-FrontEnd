import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ObjectsService } from 'src/app/services/objects.service';
import { Objects } from 'src/app/models/objects';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-objectslist',
  templateUrl: './objectslist.component.html',
  styleUrls: ['./objectslist.component.css']
})
export class ObjectslistComponent implements OnInit {
  list: object[]=[];
  users:User[]=[];
  user:User={};
  constructor(public objectsService:ObjectsService,
              public toastr: ToastrService,
              public userService:UserService) { }

  ngOnInit(): void {
    this.objectsService.getObjects();
    this.userService.getUsers().subscribe(data=>{
      this.users=data as User[];
      for(var i =0;i<this.users.length;i++){
        if(this.users[i].userName==localStorage.getItem("user")){
          this.user=this.users[i];
        }
      }
    });
  }
  deleteObject(id:number){
    if(confirm('Quiere Elimidar el objeto?')){
      this.objectsService.deleteObject(id).subscribe(data =>{
        this.toastr.warning('A elimidano el objeto','El Obsjeto fue Eliminado')
        this.objectsService.getObjects();
      });
    }
  }
  
  editObject(objects:Objects){
    this.objectsService.updateObject(objects);
  }
}
