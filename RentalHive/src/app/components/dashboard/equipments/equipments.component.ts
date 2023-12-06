import { Component , OnInit  } from '@angular/core';
import { EquipmentServiceService } from 'src/app/services/EquipmentService/equipment-service.service';

@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent implements OnInit {

  equipments: any[] = [];
  selectedEquipment: any = {};
  newEquipment: any = {};

  constructor(private equipmentService: EquipmentServiceService) { }

  ngOnInit(): void {
    this.loadEquipments();
  }

  loadEquipments(): void {
    this.equipmentService.getAllEquipments().subscribe(data => {
      this.equipments = data;
    });
  }

  onSelect(equipment: any): void {
    this.selectedEquipment = { ...equipment };
  }

  addEquipment(): void {
    this.equipmentService.addEquipment(this.newEquipment).subscribe(() => {
      this.loadEquipments();
      this.newEquipment = {}; // clear the form
    });
  }

  updateEquipment(): void {
    this.equipmentService.updateEquipment(this.selectedEquipment.id, this.selectedEquipment).subscribe(() => {
      this.loadEquipments();
      this.selectedEquipment = {}; // clear the form
    });
  }

  deleteEquipment(id: number): void {
    this.equipmentService.deleteEquipment(id).subscribe(() => {
      this.loadEquipments();
      this.selectedEquipment = {}; // clear the form
    });
  }
}
