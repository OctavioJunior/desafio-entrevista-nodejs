export default interface CompanyRegisterDTO {
  companyName: string;
  cnpj: string;
  companyAddress: string;
  companyPhone: number;
  numberOfCarParking: number;
  numberOfMotorcycleParking: number;
  availabreCarSlot?: number;
  availableMotorcycleSlot?: number;
}

export interface CompanyUpdateDTO {
  companyName?: string;
  cnpj?: string;
  companyAddress?: string;
  companyPhone?: number;
  numberOfCarParking?: number;
  numberOfMotorcycleParking?: number;
}
