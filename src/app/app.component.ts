import { Component, Input, OnInit } from '@angular/core';
/*Programar que al dar click en una card del componente principal se llame al componente "descripcion" y este segun el parametro recibido muestre el detalle del producto. */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fotos = ["../assets/header/1.jpg","../assets/header/2.jpg","../assets/header/3.jpg","../assets/header/4.jpg","../assets/header/5.webp"]
  title = 'desafio';
  images = ['cardenales','caracas','tigres','aguilas','magallanes','bravos','caribes','guante','bate','guantin','pelota','equipo','base','out','safe'].map((n) => `../assets/images/${n}.jpg`);
  /*Crear una variable llamada "busqueda" de tipo string, en el archivo .ts del componente. Debera combinar la plantilla del header en un unico componente para que toda la vista sea con un solo componente. */
  @Input() busqueda: string = "";
  /*Crear en el archivo .ts del componente un arreglo con al menos 5 objetos con los siguientes atributos: nombre, precio, imagenUrl, tipoEnvio. */
  productos = {
    vista : [
      {
        id: 1,
        nombre: "Cardenales",
        precio: 1900,
        imagenUrl: `${this.images[0]}`,
        tipoEnvio:true
      },
      {
        id: 2,
        nombre: "Caracas",
        precio: 1900,
        imagenUrl: `${this.images[1]}`,
        tipoEnvio:false
      },
      {
        id: 3,
        nombre: "Tigres",
        precio: 1900,
        imagenUrl: `${this.images[2]}`,
        tipoEnvio:true
      },
      {
        id: 4,
        nombre: "Aguilas",
        precio: 1900,
        imagenUrl: `${this.images[3]}`,
        tipoEnvio:false
      },
      {
        id: 5,
        nombre: "Magallanes",
        precio: 1900,
        imagenUrl: `${this.images[4]}`,
        tipoEnvio:true
      }
    ],
    relacionVehiculos : [
      {
        id: 1,
        nombre: "Bravos",
        precio: 1900,
        imagenUrl: `${this.images[5]}`,
        tipoEnvio:false
      },
      {
        id: 2,
        nombre: "Caribes",
        precio: 1900,
        imagenUrl: `${this.images[6]}`,
        tipoEnvio:true
      },
      {
        id: 3,
        nombre: "guante",
        precio: 1900,
        imagenUrl: `${this.images[7]}`,
        tipoEnvio:true
      },
      {
        id: 4,
        nombre: "bate",
        precio: 1900,
        imagenUrl: `${this.images[8]}`,
        tipoEnvio:true
      },
      {
        id: 5,
        nombre: "Guantin",
        precio: 1900,
        imagenUrl: `${this.images[9]}`,
        tipoEnvio:false
      }
    ],
    relacionComputacion : [
      {
        id: 1,
        nombre: "Pelota",
        precio: 1900,
        imagenUrl: `${this.images[10]}`,
        tipoEnvio:false
      },
      {
        id: 2,
        nombre: "Equipo",
        precio: 1900,
        imagenUrl: `${this.images[11]}`,
        tipoEnvio:false
      },
      {
        id: 3,
        nombre: "Base",
        precio: 1900,
        imagenUrl: `${this.images[12]}`,
        tipoEnvio:true
      },
      {
        id: 4,
        nombre: "Out",
        precio: 1900,
        imagenUrl: `${this.images[13]}`,
        tipoEnvio:true
      },
      {
        id: 5,
        nombre: "Safe",
        precio: 1900,
        imagenUrl: `${this.images[14]}`,
        tipoEnvio:false
      }
    ]
  }
  public datosSelec: Array<any> = [];
  mostrarDetalle(id: number, titulo: string, precio: number, tipoEnvio: boolean, imagen: string) {
    this.datosSelec =
      [
        id,
        titulo,
        precio,
        tipoEnvio,
        imagen
      ]
    this.servicioDetalle.disparadorDetalle.emit({
      datos: this.datosSelec,

    });

  }

}
