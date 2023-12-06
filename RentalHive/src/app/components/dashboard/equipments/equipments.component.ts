import { Component , OnInit  } from '@angular/core';
import { EquipmentServiceService } from 'src/app/services/EquipmentService/equipment-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  equipments: any[] = [];
  newEquipment: any = {};

  constructor(
    private equipmentService: EquipmentServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipmentService.getAllEquipments().subscribe(data => {
      this.equipments = data;
    });
  }


  addEquipment(): void {
    this.equipmentService.addEquipment(this.newEquipment).subscribe(() => {
      this.loadEquipments();
      this.newEquipment = {}; // clear the form
    });
  }


  deleteEquipment(id: number): void {
    console.log(id);
    this.equipmentService.deleteEquipment(id).subscribe(() => {
      this.loadEquipments();
    });
  }

  navigateToUpdate(id: number): void {
    // Navigate to the EquipmentFormComponent with the specific id
    this.router.navigate(['/Equipments/update'], { queryParams: { id: id } });
  }
}
