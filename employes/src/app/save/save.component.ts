import { Component, OnInit } from '@angular/core';
import {EmployeService} from '../services/employe.service';
import {EmployeModel} from '../models/employe.model';
import {FormBuilder} from '@angular/forms';
import {Validators} from '@angular/forms';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  employe: EmployeModel;
  msg: string;

  saveForm = this.fb.group({
    cedula: ['', Validators.required],
    email: [''],
    nombreCompleto:['', Validators.required],
    direccion:[''],
    fechaIngreso: ['',Validators.required],
    salario: [''],
  });

  onSubmit(){
    this.employe = this.saveForm.value;
    this.employeService.addEmploye(this.employe);

    this.saveForm = this.fb.group({
      cedula: ['', Validators.required],
      email: [''],
      nombreCompleto:['', Validators.required],
      direccion:[''],
      fechaIngreso: ['',Validators.required],
      salario: [''],
    });

    console.log("Component");
    console.log(this.employe);
  }
  
  constructor(private fb: FormBuilder, private employeService:EmployeService) { }

  ngOnInit() {
  }

}
