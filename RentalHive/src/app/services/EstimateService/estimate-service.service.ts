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
    return this.http.get<any[]>(`${environment.estimateApi}/estimate`);
  }

  getEstimateById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.estimateApi}/estimate/${id}`);
  }

  addEstimate(estimate: any): Observable<any> {
    return this.http.post<any>(`${environment.estimateApi}/estimate`, estimate);
  }

  updateEstimate(id: number, estimate: any): Observable<any> {
    return this.http.put<any>(`${environment.estimateApi}/estimate/${id}`, estimate);
  }

  deleteEstimate(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.estimateApi}/estimate/${id}`);
  }

  updateEstimateStatus(id: number, updatedEstimate: any, userId: number): Observable<any> {
    return this.http.put<any>(`${environment.estimateApi}/estimate/${id}/updateStatus?userId=${userId}`, updatedEstimate);
  }
}
