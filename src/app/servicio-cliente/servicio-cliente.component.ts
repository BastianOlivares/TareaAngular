import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-servicio-cliente',
  templateUrl: './servicio-cliente.component.html',
  styleUrls: ['./servicio-cliente.component.scss']
})
export class ServicioClienteComponent implements OnInit {
  
  formulario: FormGroup;

  constructor(public form:FormBuilder) { 
    this.formulario=this.form.group({
      nombre: ['',Validators.required],
      telefono: ['',Validators.required],
      correo: ['',Validators.required],
      dirigido: ['',Validators.required],
      Mensaje: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  validaDatos() {
    console.log(this.formulario.value);

  }

}
