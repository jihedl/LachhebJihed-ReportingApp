import { Component, OnInit } from '@angular/core';
import { SalesdataService } from '../salesdata.service';

@Component({
  selector: 'app-section-sales',
  templateUrl: './section-sales.component.html',
  styleUrls: ['./section-sales.component.css']
})
export class SectionSalesComponent implements OnInit {

  salesDataByPeriode: any;

  constructor(private _salesDataServes: SalesdataService) { }

  ngOnInit(): void {
    
  }

}
