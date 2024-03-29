import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Quiosco } from 'app/Interfaces/quiosco';
import { QuioscoService } from 'app/quiosco.service';

@Component({
  selector: 'app-quiosco',
  templateUrl: './quiosco.component.html',
  styleUrls: ['./quiosco.component.css']
})
export class QuioscoComponent implements OnInit {

  listaQuioscos:Quiosco[]=[];
  formularioQuioscos:FormGroup;

  constructor(
    private _quioscoServicio:QuioscoService,
    private fb:FormBuilder
  ) { 
    this.formularioQuioscos=this.fb.group({
      nombre_quiosco:['',Validators.required],
      ubicacion:['',Validators.required],
      correo:['',Validators.required],
      fecha_registro:['',Validators.required],
      imagen:['',Validators.required]
    });
  }

  //metodo para listar quioscos
  obtenerQuioscos(){
    this._quioscoServicio.getList().subscribe({
      next:(data)=>{
        this.listaQuioscos = data;
      },error:(e)=>{}
    });
  }

  ngOnInit(): void {
    this.obtenerQuioscos();
  }

  //Metodo para eliminar quiosco
  eliminarQuiosco(quiosco:Quiosco){
    this._quioscoServicio.delete(quiosco.id_quiosco).subscribe({
      next:(data)=>{
        const nuevoQuiosco = this.listaQuioscos.filter(item => item.id_quiosco != quiosco.id_quiosco)
        this.listaQuioscos = nuevoQuiosco;
      },error:(e)=>{}
    });
  }

}
