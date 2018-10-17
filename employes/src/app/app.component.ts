import { Component } from '@angular/core';
import { EmployeService } from './services/employe.service';
import { EmployeModel } from './models/employe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private employeService:EmployeService) {}

  date: Date = new Date();
  employes: EmployeModel[];

  ngOnInit() {
    this.employes = this.employeService.getEmployes();
  }
}