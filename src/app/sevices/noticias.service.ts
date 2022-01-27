import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { INoticia } from '../interface/interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  URL: string = 'http://localhost:3000';

  //Creando la peticion 
  constructor(private http:HttpClient ) { }

  getNoticias(): Observable <INoticia[]>{
     return this.http.get<INoticia[]>(`${this.URL}/noticias`)
  }

}
