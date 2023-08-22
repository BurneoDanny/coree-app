import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  private url:string = "http://localhost:3000/rest";
  private AutoresALL : string = "/autor/findAll/json";
  private LibrosALL : string = "/autor/findAll/json";
  private PATH_LIBROSBYAUTOR : string = ``;


  constructor(private http : HttpClient) { }

  getResponseAutoresALL(){
    return this.http.get(this.url + this.AutoresALL);
  }

  getResponseLibrosALL(){
    return this.http.get(this.url + this.LibrosALL);
  }

  getResponseLibroByAutorId(id:number){
    this.PATH_LIBROSBYAUTOR =  `/libro/findBookByAuthor/${id}/json`;
    return this.http.get(this.url + this.PATH_LIBROSBYAUTOR);
  }

}
