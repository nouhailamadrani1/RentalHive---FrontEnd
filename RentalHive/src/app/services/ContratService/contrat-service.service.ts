// contract.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContractDTO } from './ContractDTO';

@Injectable({
  providedIn: 'root',
})



export class ContratServiceService {
  private baseUrl = 'http://localhost:8080/batispro/estimates';

  constructor(private http: HttpClient) {}

  getAllApprovedEstimatesForClient(clientId: number): Observable<ContractDTO[]> {
    return this.http.get<ContractDTO[]>(`${this.baseUrl}/getAllApprovedEstimatesForClient/${clientId}`);
  }

  archiveContract(id: number): Observable<string> {
    return this.http.put<string>(`${this.baseUrl}/archiveContract/${id}`, {});
  }

  getAllNonArchivedEstimatesForClient(clientId: number): Observable<ContractDTO[]> {
    return this.http.get<ContractDTO[]>(`${this.baseUrl}/getAllNonArchivedEstimatesForClient/${clientId}`);
  }
}
