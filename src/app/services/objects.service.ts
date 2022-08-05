import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Objects } from '../models/objects';

@Injectable({
  providedIn: 'root'
})

export class ObjectsService {
  private myAppUrl='https://localhost:7047/';
  private myApiUrl='api/Objects/';
  list: any[]=[];
  private actualizarFormulario =new BehaviorSubject<Objects>({} as any);
  constructor(private http: HttpClient) { }

  addObeject(object:Objects):Observable<Objects>{
    return this.http.post<Objects>(this.myAppUrl+this.myApiUrl,object)
  }
  editComplete(id:number,object:Objects){
    return this.http.put(this.myAppUrl+this.myApiUrl+id,object,
      {
        responseType: 'text',
      },
    );
  }
  getObjects() {
    return this.http.get(this.myAppUrl+this.myApiUrl).subscribe(data=>{
         this.list = data as Objects[];
        console.log(this.list);
    })
  }
  deleteObject(id:number):Observable<Objects>{
    return this.http.delete<Objects>(this.myAppUrl+this.myApiUrl + id);
  }
  updateObject(object:Objects){
    this.actualizarFormulario.next(object)
  }
  getObeject$():Observable<Objects>{
    return this.actualizarFormulario.asObservable();
  }
}
