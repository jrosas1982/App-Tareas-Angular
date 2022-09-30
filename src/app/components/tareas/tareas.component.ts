import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas : Tarea[] = [];
  nombreTarea = '';
  
  
  constructor() { }

  agregarTarea(event :Event){
    console.log(event);
    event.preventDefault();
    const tarea :  Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }
  eliminarTarea(id : number){    
  this.listaTareas.splice(id, 1);
  }
  actaualizarTarea(tarea : Tarea,id : number){    
  this.listaTareas[id].estado = !tarea.estado;
  }

  ngOnInit(): void {
  }

}
