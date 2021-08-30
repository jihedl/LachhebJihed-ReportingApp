import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Facture } from './facture';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SalesdataService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getMontant(): Observable<Facture[]> {
    return this.http.get<Facture[]>(`${this.apiServerUrl}/ByPeriode`);}

}
