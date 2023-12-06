import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalRequest } from 'src/app/services/RentalRequestService/RentalRequest';
import { RentalRequestServiceService } from 'src/app/services/RentalRequestService/rental-request-service.service';

@Component({
  selector: 'app-rental-request-form',
  templateUrl: './rental-request-form.component.html',
  styleUrls: ['./rental-request-form.component.css']
})
export class RentalRequestFormComponent {

  constructor(private RentalRequestService: RentalRequestServiceService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    // Access the 'id' parameter from the route
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id){
        this.RentalRequestService.getById(id)
        .subscribe({
          next: (res:any)=>{
            res.start_date = this.formatDate(new Date(res.start_date));
            res.end_date = this.formatDate(new Date(res.end_date));
            this.rentalRequest = res;
            console.log('result', this.rentalRequest);
          },
          error:(err:any)=>{
            console.log('error',err);
          }
          // You can now use the 'id' in your component as needed
        });
      }
    });
  }

   rentalRequest: RentalRequest = {
    start_date: this.formatDate(new Date()),
    end_date: this.formatDate(new Date()),
    rentalRequestStatus: 'InProgress',
    client: {
      id: 1
    },
    equipment: {
      id: 1
    }
  };

  submit() {
    var id = this.route.snapshot.params['id'];
    if(id){
      this.RentalRequestService.update(id,this.rentalRequest)
      .subscribe({
          next :(res:any)=>{
            console.log('result', res);
            this.router.navigate(['/rentalrequest']);
          },
          error:(err:any)=>{
            console.log('error',err);
          }
      });

    }else{
      this.RentalRequestService.save(this.rentalRequest)
      .subscribe({
          next :(res:any)=>{
            console.log('result', res);
            this.router.navigate(['/rentalrequest']);
          },
          error:(err:any)=>{
            console.log('error',err);
          }
      });
    };

  }

  formatDate(date: Date): string {
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
}
