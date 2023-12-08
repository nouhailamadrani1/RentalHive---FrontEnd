import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipmentServiceService } from 'src/app/services/EquipmentService/equipment-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-equipment-form',
  templateUrl: './equipment-form.component.html',
  styleUrls: ['./equipment-form.component.css']
})
export class EquipmentFormComponent implements OnInit {
  @Input() equipment: any = {};
  @Output() saveEquipment = new EventEmitter<any>();

  isAdding: boolean = false;

  constructor(
      private equipmentService: EquipmentServiceService ,    
      private router: Router,
      private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.queryParams['id']);
    this.isAdding = !id;
    if (id) {
      this.equipmentService.getEquipmentById(id).subscribe(equipment => {
        this.equipment = equipment;
      });
    }
  }

  onSubmit(): void {
    if (this.isAdding) {
      this.equipmentService.addEquipment(this.equipment).subscribe(
        response => {
        console.log('Equipment saved successefully');
        this.router.navigate(['/Equipments']);
        },
        error => {
          console.error('Error adding equipment:', error);
        }
      );
    } else {
      this.equipmentService.updateEquipment(this.equipment.id, this.equipment).subscribe(
        response => {
          console.log('Equipment updated successefully');
          this.router.navigate(['/Equipments']);
        },
        error => {
          console.log('Equipment update FAILED');
        }
      );
    }
  }
}
