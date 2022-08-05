import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Objects } from 'src/app/models/objects';
import { ObjectsService } from 'src/app/services/objects.service';
import {ObjectslistComponent} from 'src/app/components/abjects/objectslist/objectslist.component'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-obsectsn',
  templateUrl: './obsectsn.component.html',
  styleUrls: ['./obsectsn.component.css']
})
export class ObsectsnComponent implements OnInit{
  form: FormGroup;
  flag:boolean=false;
  idObject=0;
  constructor(private formBuilder:FormBuilder, 
              private objectsService:ObjectsService,
              private toastr:ToastrService) {
    this.form=this.formBuilder.group({
      Id:0,
      ObjectName:['',[Validators.required]],
      ObjectType:['1',[Validators.required]],    
      ObjectDeposit:['',[Validators.required]], 
      ObjectAisle:['',[Validators.required]], 
      ObjectShelf:['',[Validators.required]], 
      ObjectFloor:['',[Validators.required]], 
      ObjectStock:['',[Validators.required,Validators.pattern('[0-9]*')]], 
    })
    
   }
   
  ngOnInit(): void {
    this.objectsService.getObeject$().subscribe(data =>{
      console.log(data);
      const object:any=data
      this.idObject=object.id;
      this.flag=true;
      const names=({
        ObjectName: object.objectName,
        ObjectType: object.objectType,
        ObjectDeposit: object.objectDeposit,
        ObjectAisle: object.objectAisle,
        ObjectShelf: object.objectShelf,
        ObjectFloor: object.objectFloor,
        ObjectStock: object.objectStock,
      });
      this.form.patchValue(names);
    })
  }

  



  addObject(){
    const object = {
      id:0,
      ObjectName: this.form.get('ObjectName')?.value,
      ObjectType: this.form.get('ObjectType')?.value,
      ObjectDeposit: this.form.get('ObjectDeposit')?.value,
      ObjectAisle: this.form.get('ObjectAisle')?.value,
      ObjectShelf: this.form.get('ObjectShelf')?.value,
      ObjectFloor: this.form.get('ObjectFloor')?.value,
      ObjectStock: this.form.get('ObjectStock')?.value,
    }
    if(this.flag==true){
      object.id=this.idObject;
      this.flag=false;
      this.objectsService.editComplete(object.id!,object).subscribe({
        
        next:data=>{
          this.toastr.success('El Objeto fue Editado.','Ya esta en su ubicacion.');
          this.form.reset();
          this.objectsService.getObjects();
          this.flag=false;
          this.form.reset();
        },
        error: err=>{
          this.toastr.warning('El Objeto no fue editado.','Ocurrio un error.');
        }
      });
    }else{
      this.objectsService.addObeject(object).subscribe(data=>{
        this.toastr.success('El Obejeto fue agregado.','Ya esta en su ubicacion.');
        this.objectsService.getObjects();
        this.form.reset();
      });
    }
    
    
  }
}
