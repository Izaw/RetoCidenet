import { Component } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { EmployeModel } from '../models/employe.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  constructor(private employeService:EmployeService) {}

  date: Date = new Date();
  employes: EmployeModel[];

  ngOnInit() {
    this.employes = this.employeService.getEmployes();
  }
}
