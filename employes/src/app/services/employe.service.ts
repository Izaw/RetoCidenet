import { Injectable } from '@angular/core';
import { EmployeModel } from '../models/employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  date: Date = new Date('2018-10-02');
  private employes: EmployeModel[];

  constructor() {
    this.employes = [
      {
        cedula: '1214718276',
        email: 'emunoz@cidenet.com.co',
        nombreCompleto: 'Elizabeth Muñoz',
        direccion: 'Calle 106 b 67-109',
        fechaIngreso: this.date,
        salario: 1500000,
      },
      {
        cedula: '1037622356',
        email: 'vasco@cidenet.com.co',
        nombreCompleto: 'Carlos Andrés Vasco',
        direccion: 'Calle 106 b 67-109',
        fechaIngreso: this.date,
        salario: 2500000,
      }
    ];
   }

   getEmployes():EmployeModel[]{
     return this.employes;
   }

  addEmploye(employe:EmployeModel){
    this.employes.push(employe);
  }

  //Falta Implementar
  updateEmploye(employe:EmployeModel){
    this.employes.push(employe);
  }

}
