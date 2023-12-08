import { Component , OnInit } from '@angular/core';
import { EstimateServiceService } from 'src/app/services/EstimateService/estimate-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css']
})
export class EstimatesComponent {

  estimates: any[] = [];
  newEstimates: any[] = [];


  constructor(
    private estimateService : EstimateServiceService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.loadEstimates();
    }

    loadEstimates(): void {
      this.estimateService.getAllEstimates().subscribe(data => {
        this.estimates = data;
      });
    }

    deleteEstimate(id: number): void {
      console.log(id);
      this.estimateService.deleteEstimate(id).subscribe(() => {
        this.loadEstimates();
      });
    }

    navigateToUpdate(id: number): void {
      this.router.navigate(['/Estimates/update'], { queryParams: { id: id } });
    }
    
}
