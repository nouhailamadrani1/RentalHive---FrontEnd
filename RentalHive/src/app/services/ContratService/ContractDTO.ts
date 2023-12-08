// contract.model.ts
export interface ContractDTO {
    title: string;
    estimatedCost: string;
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    equipmentName: string;
    equipmentType: string;
    id?: number; // Assuming you have an ID property
  }