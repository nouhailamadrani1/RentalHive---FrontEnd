import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ContratServiceService } from '../../../services/ContratService/contrat-service.service';
import { ContractDTO } from '../../../services/ContratService/ContractDTO';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  clientId: number = 2;
  approvedContracts: ContractDTO[] = [];
  nonArchivedContracts: ContractDTO[] = [];

  searchClientId: number = 2;
  alertMessage: string | null = null;

  constructor(private ContratServiceService: ContratServiceService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadApprovedContracts();
    this.loadNonArchivedContracts();
  }

  searchContracts(): void {
    if (this.searchClientId) {
      this.clientId = this.searchClientId;
      this.loadApprovedContracts();
      this.loadNonArchivedContracts();
    }
  }

  loadApprovedContracts(): void {
    this.ContratServiceService.getAllApprovedEstimatesForClient(this.clientId).subscribe(
      (contracts) => {
        this.approvedContracts = contracts;
      },
      (error: any) => {
        console.error('Error loading approved contracts:', error);
      }
    );
  }

  loadNonArchivedContracts(): void {
    this.ContratServiceService.getAllNonArchivedEstimatesForClient(this.clientId).subscribe(
      (contracts) => {
        this.nonArchivedContracts = contracts;
        this.cdr.detectChanges(); // Explicitly run change detection
      },
      (error: any) => {
        console.error('Error loading non-archived contracts:', error);
      }
    );
  }

  archiveContract(id: number ): void {
    if (id) {
        this.ContratServiceService.archiveContract(id).subscribe(
            (response) => {
             
                this.loadNonArchivedContracts();
            },
            (message) => {
              // Success response, show alert
              this.alertMessage = message;
              // Optionally, you can update your contract list or perform other actions
            },
        );
    }
}
}
