import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  userList:User[]=[];
  flag:boolean=false;
  constructor(public router:Router,
              public userService:UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.userList=data as User[];
    });
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(data=>{
      this.userService.getUsers().subscribe(data=>{
        this.userList=data as User[];
      });
    });
  }
  editUser(user:User){
    this.router.navigateByUrl('singin');
    this.userService.editUser(user);
  }

  crearU(){
    this.router.navigateByUrl('singin');
  }
}
