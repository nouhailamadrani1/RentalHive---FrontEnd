import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipmentServiceService } from 'src/app/services/EquipmentService/equipment-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
  @Input() equipment: any = {};
  @Output() saveEquipment = new EventEmitter<any>();

  constructor(
      private equipmentService: EquipmentServiceService ,    
      private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Call the addEquipment method in the service
    this.equipmentService.addEquipment(this.equipment).subscribe(
      response => {
        // Emit the saved equipment data to the parent component
        this.saveEquipment.emit(response);
        console.log('Equipment saved successefully');
        // Redirect to /Equipments
        this.router.navigate(['/Equipments']);
      },
      error => {
        // Handle error, log, or display a user-friendly message
        console.error('Error adding equipment:', error);
      }
    );
  }
}
