import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Autor } from 'src/app/interfaces/autor';
import { Libro } from 'src/app/interfaces/libro';
import { DataProviderService } from 'src/app/providers/data-provider.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {
  autores : Autor[] = [];
  libros: Libro[] = [];
  displayedColumns : string[] = ['idautor','nombre','editorial','anio'];
  autoresSelect = new FormControl('');

  constructor(private DataProvider : DataProviderService){

  }

  ngOnInit(){
    this.DataProvider.getResponseAutoresALL().subscribe((response)=>{
      this.autores = response as Autor[]
    })
  }

  selection(id: number | null) {
    if (id === null) {
      this.libros = [];
    } else {
      this.DataProvider.getResponseLibroByAutorId(id).subscribe((response) => {
        this.libros = response as Libro[];
      });
    }
  }
  
}
