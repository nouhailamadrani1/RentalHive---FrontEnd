import { Component ,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { EstimateServiceService } from 'src/app/services/EstimateService/estimate-service.service';
import { RentalRequestServiceService } from 'src/app/services/RentalRequestService/rental-request-service.service';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';
@Component({
  selector: 'app-estimate-form',
  templateUrl: './estimate-form.component.html',
  styleUrls: ['./estimate-form.component.css']
})
export class EstimateFormComponent {

  estimate: any = {};
  addEstimate:any = {};
  updateEstimate:any = {};
  users:any = [];
  rentalRequests:any = [];
  isAdding: boolean = false;

  constructor(
    private estimateService : EstimateServiceService,
    private userService : UserServiceService,
    private rentalRequestService : RentalRequestServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void{
    const id = Number(this.route.snapshot.queryParams['id']);
    this.isAdding = !id;
    if (id) {
      this.estimateService.getEstimateById(id).subscribe(estimate => {
        this.estimate = estimate;
      });
    }else{
      this.usersList();
      this.rentalRequestsList();

    }
  }

  onSubmit(): void {
    if (this.isAdding) {
      this.addEstimate = {
        "rentalRequest": {
            "id" : this.estimate.rentalRequestId
        },
        "admin": {
            "id": this.estimate.userId
        } 
        }

      console.log(this.estimate.userId, this.estimate.rentalRequestId);
      console.log(this.addEstimate);

      this.estimateService.addEstimate(this.addEstimate).subscribe(
        response => {
        console.log('Estimate saved successefully');
        this.router.navigate(['/Estimates']);
        },
        error => {
          console.error('Estimate adding equipment:', error);
        }
      );
    } else {
      this.updateEstimate = {
        "rentalRequest": {
            "id" : this.estimate.rentalRequest.id
        },
        "admin": {
            "id": this.estimate.rentalRequest.client.id
        } ,
        "estimatedCost": this.estimate.estimatedCost,
        "estimateStatus" : this.estimate.estimateStatus
    
      }

      console.log(this.updateEstimate);
      this.estimateService.updateEstimate(this.estimate.id, this.updateEstimate).subscribe(
        response => {
          console.log('Estimate updated successefully');
          this.router.navigate(['/Estimates']);
        },
        error => {
          console.log('Estimate update FAILED');
        }
      );
    }
  }

  usersList(): void{
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    })
  }

  rentalRequestsList(): void{
    this.rentalRequestService.getAll().subscribe(rentalRequests => {
      this.rentalRequests = rentalRequests;
    })
  }
}
