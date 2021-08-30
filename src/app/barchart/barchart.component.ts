import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import * as moment from 'moment';
import { SalesdataService } from '../salesdata.service';
import { Facture } from '../facture';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  public factures: Facture[];
  FactureLabels: string[];
  FactureData: number[];

  constructor(public _salesDataServes : SalesdataService) { }

  public barChartData: any[];
  public barChartLabels: string[];
  public barChartType : ChartType= 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  ngOnInit() { 

    this._salesDataServes.getMontant()
    .subscribe((res: Facture[]) => {
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map(x => x[0]);
        this.barChartData = [{ 'data': localChartData.map(x => x[1]), 'label': 'MontantTota'}];
    });
  
  }

  getChartData(res: Facture[]){
    this.factures = res;

    const formattedMontant = this.factures.reduce((r:Array<any>, e) => {
      r.push([e.periode, e.montantTotal]);
    return r;
    }, []);
  
    console.log('formattedMontant=',formattedMontant);
    return formattedMontant;
    

  }


}
