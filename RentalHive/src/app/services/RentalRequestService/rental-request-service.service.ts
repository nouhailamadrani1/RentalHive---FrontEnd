import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalRequestServiceService {

  baseUrl = 'http://localhost:8080/batispro/rentalrequest';

  constructor(private HttpClient: HttpClient) {

  }

  save(rentalRequest: any) {
    return this.HttpClient.post(this.baseUrl, rentalRequest);
  }

  getAll() {
    return this.HttpClient.get(this.baseUrl);
  }

  getById(id: number) {
    return this.HttpClient.get(this.baseUrl + '/' + id);
  }

  update(id:number,rentalRequest: any) {
    return this.HttpClient.put(this.baseUrl+'/' + id, rentalRequest);
  }

  delete(id:number | undefined) {
    console.log('delete', id);
    this.HttpClient.delete(this.baseUrl+'/' + id)
    .subscribe({
      next: (res:any)=>{
        console.log('result', res);
      },
      error:(err:any)=>{
        console.log('error',err);
      }
    });
  }
}
