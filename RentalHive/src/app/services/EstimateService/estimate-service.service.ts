import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstimateServiceService {
  constructor(private http: HttpClient) { }

  getAllEstimates(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.estimateApi}`);
  }

  getEstimateById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.estimateApi}/${id}`);
  }

  addEstimate(estimate: any): Observable<any> {
    return this.http.post<any>(`${environment.estimateApi}`, estimate);
  }

  updateEstimate(id: number, estimate: any): Observable<any> {
    return this.http.put<any>(`${environment.estimateApi}/${id}`, estimate);
  }

  deleteEstimate(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.estimateApi}/${id}`);
  }

  updateEstimateStatus(id: number, updatedEstimate: any, userId: number): Observable<any> {
    return this.http.put<any>(`${environment.estimateApi}/${id}/updateStatus?userId=${userId}`, updatedEstimate);
  }
}
