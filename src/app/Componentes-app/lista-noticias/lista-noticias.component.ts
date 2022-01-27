import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../../../../../nestjs-y-mongo/src/noticia/noticia.service';



@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {

  constructor(private noticiaService: NoticiaService) { }

  ngOnInit(){
    this.getNoticias();
  }

  getNoticias(){
    this.noticiaService.getNoticias()


  }


}
