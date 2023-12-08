import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentServiceService {


  constructor(private http: HttpClient) { }

  getAllEquipments(): Observable<any[]> {
    return this.http.get<any[]>(environment.equipmentsApi);
  }
  
  getEquipmentById(id: number): Observable<any> {
    const url = `${environment.equipmentsApi}/${id}`;
    return this.http.get<any>(url);
  }

  addEquipment(equipment: any): Observable<any> {
    return this.http.post<any>(environment.equipmentsApi, equipment);
  }

  updateEquipment(id: number, equipment: any): Observable<any> {
    const url = `${environment.equipmentsApi}/${id}`;
    return this.http.put<any>(url, equipment);
  }

  deleteEquipment(id: number): Observable<any> {
    const url = `${environment.equipmentsApi}/${id}`;
    return this.http.delete<any>(url);
  }
}
