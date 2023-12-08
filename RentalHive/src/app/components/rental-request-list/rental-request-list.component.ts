import { Component } from '@angular/core';
import { RentalRequest } from 'src/app/services/RentalRequestService/RentalRequest';
import { RentalRequestServiceService } from 'src/app/services/RentalRequestService/rental-request-service.service';

@Component({
  selector: 'app-rental-request-list',
  templateUrl: './rental-request-list.component.html',
  styleUrls: ['./rental-request-list.component.css']
})
export class RentalRequestListComponent {
  constructor(private rentalRequestService : RentalRequestServiceService) { }

  rentalRequests : RentalRequest[] = [];

  ngOnInit(): void {
    this.rentalRequestService.getAll()
    .subscribe({
      next: (res:any)=>{
        this.rentalRequests = res;
        console.log('result', this.rentalRequests);

      },
      error:(err:any)=>{
        console.log('error',err);
      }
    });
  }

  delete(id:number | undefined) {
    this.rentalRequestService.delete(id);
    this.ngOnInit();
  }

}
