import { Component, OnInit } from '@angular/core';
import{Noticias} from '../interfaces/noticias'



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ListadoNoticiasDestacadas:Array<Noticias> =[
    {
      id:1,
      idCategoria:1,
      titulo:"El juego del calamar se convierte en la serie mas vista de Netflix",
      autor:"Autor noticia 1",
      fecha:Date().toString(),
      imagen:"1.png",
      texto:"La serie narra la historia de 456 personas que deciden convertirse en jugadores de una serie de misteriosos y enfermizos juegos infantiles de supervivencia mortal para tener la oportunidad de ganar la cantidad máxima de 45 000 millones de wones. Por cada persona que muere se añade 100 millones de wones al bote, incitando el conflicto entre los jugadores.7​",
      color:"rojo",
      ruta:"noticiaDestacada1",

    },

    {
      id:2,
      idCategoria:1,
      titulo:"Muere el rinoceronte mas viejo",
      autor:"Autor noticia 2",
      fecha:Date().toString(),
      imagen:"2.png",
      texto:"esta noticia cuenta como el rinoceronte mas viejo del mundo muere en pleno zoologico de santiago​",
      color:"verde",
      ruta:""
    },

    {
      id:3,
      idCategoria:1,
      titulo:"Ciclismo - el regreso de Chris Froome",
      autor:"Autor noticia 3",
      fecha:Date().toString(),
      imagen:"3.png",
      texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
      color:"gris",
      ruta:""
    }
  ];

  ListaNoticiasNormales:Array<Noticias> =[
    {
      id:1,
      idCategoria:2,
      titulo:"Noticia",
      autor:"Autor noticia 4",
      fecha:Date().toString(),
      imagen:"4.png",
      texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      color:"",
      ruta:"noticiaDestacada1"
    },
    {
      id:2,
      idCategoria:2,
      titulo:"Noticia",
      autor:"Autor noticia 5",
      fecha:Date().toString(),
      imagen:"5.png",
      texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      color:"",
      ruta:""
    },
    {
      id:3,
      idCategoria:2,
      titulo:"Noticia",
      autor:"Autor noticia 6",
      fecha:Date().toString(),
      imagen:"6.png",
      texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      color:"",
      ruta:""
    },
    {
      id:4,
      idCategoria:2,
      titulo:"Noticia",
      autor:"Autor noticia 7",
      fecha:Date().toString(),
      imagen:"7.png",
      texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
      color:"",
      ruta:""
    }
  ]
}
