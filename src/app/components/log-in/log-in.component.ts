import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { User_Role } from 'src/app/models/user_role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder:FormBuilder, 
      private userService:UserService,
      private toastr:ToastrService,private router:Router) {
        this.form=this.formBuilder.group({
          user:['',[Validators.required]],
          pwd:['',[
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
          ]]
        })
       }

  ngOnInit(): void {
  }
  isUserValid:boolean=false;
  listrole:User_Role[]=[];
  private list:any[]=[];
  logIn(){
    const user_Roles:User_Role = {
      userRole: 'dsasf',
    }
    this.listrole = [user_Roles];
    const user:User={
      userName: this.form.get('user')?.value,
      userPassword: this.form.get('pwd')?.value,
      user_Roles: this.listrole,
    }
    this.userService.validarUser(user).subscribe({
      next:data=>{
        this.toastr.success('Acceso permitido.','Usuario Correcto');
        this.isUserValid=true;
        this.router.navigateByUrl('objects');
        this.userService.setToken(data);
      },
      error: err=>{
        this.isUserValid=false;
        this.toastr.warning('Acceso denegado.','Usuario o Contraseña incorrecto');
        this.form.reset();
      }
    })
    console.log(user);
  }
  

}
