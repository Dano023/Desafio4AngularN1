import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  id: any;
  producto: any;
  cantidadRandom: number = Math.floor(Math.random() * 100) + 1;

  fotos = ["../assets/header/1.jpg","../assets/header/2.jpg","../assets/header/3.jpg","../assets/header/4.jpg","../assets/header/5.webp"]
  title = 'desafio';
  images = ['cardenales','caracas','tigres','aguilas','magallanes','bravos','caribes','guante','bate','guantin','pelota','equipo','base','out','safe'].map((n) => `../assets/images/${n}.jpg`);
  /*Crear un componente llamado "descripcion", y copiar en el .ts el arreglo de objetos agregado al componente principal. Modificar si es necesario para que cada objeto tenga un id unico. */
  productos = {
    vista : [
      {
        id: 1,
        nombre: "Cardenales",
        precio: 1900,
        imagenUrl: `${this.images[0]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'cardenal',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 2,
        nombre: "Caracas",
        precio: 1900,
        imagenUrl: `${this.images[1]}`,
        tipoEnvio:false,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'caracas',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 3,
        nombre: "Tigres",
        precio: 1900,
        imagenUrl: `${this.images[2]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'tigres',
        estado: "usado",
        seccion: "beisbol"
      },
      {
        id: 4,
        nombre: "Aguilas",
        precio: 1900,
        imagenUrl: `${this.images[3]}`,
        tipoEnvio:false,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'aguilas',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 5,
        nombre: "Magallanes",
        precio: 1900,
        imagenUrl: `${this.images[4]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'magallanes',
        estado: "usado",
        seccion: "beisbol"
      }
    ],
    relacionVehiculos : [
      {
        id: 1,
        nombre: "Bravos",
        precio: 1900,
        imagenUrl: `${this.images[5]}`,
        tipoEnvio:false,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'braos',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 2,
        nombre: "Caribes",
        precio: 1900,
        imagenUrl: `${this.images[6]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'caribes',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 3,
        nombre: "guante",
        precio: 1900,
        imagenUrl: `${this.images[7]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'guante',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 4,
        nombre: "bate",
        precio: 1900,
        imagenUrl: `${this.images[8]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'bate',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 5,
        nombre: "Guantin",
        precio: 1900,
        imagenUrl: `${this.images[9]}`,
        tipoEnvio:false,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'guantin',
        estado: "usado",
        seccion: "beisbol"
      }
    ],
    relacionComputacion : [
      {
        id: 1,
        nombre: "Pelota",
        precio: 1900,
        imagenUrl: `${this.images[10]}`,
        tipoEnvio:false,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'pelotica',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 2,
        nombre: "Equipo",
        precio: 1900,
        imagenUrl: `${this.images[11]}`,
        tipoEnvio:false,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'team',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 3,
        nombre: "Base",
        precio: 1900,
        imagenUrl: `${this.images[12]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'base',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 4,
        nombre: "Out",
        precio: 1900,
        imagenUrl: `${this.images[13]}`,
        tipoEnvio:true,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'outs',
        estado: "nuevo",
        seccion: "beisbol"
      },
      {
        id: 5,
        nombre: "Safe",
        precio: 1900,
        imagenUrl: `${this.images[14]}`,
        tipoEnvio:false,
        categoria: 'ultima vista',
        vendidos : this.cantidadRandom,
        tipoProducto : 'quieto',
        estado: "nuevo",
        seccion: "beisbol"
      }
    ]
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.producto = this.getdescripcion(this.productos);
  }

  getdescripcion(producto: any[]): void {
    for (const p of producto) {
      if (p.id == this.id)
        return p;
    }
  }

}
