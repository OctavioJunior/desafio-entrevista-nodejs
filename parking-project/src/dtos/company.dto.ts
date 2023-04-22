export default interface CompanyRegisterDTO {
  companyName: string;
  cnpj: string;
  companyAddress: string;
  companyPhone: number;
  numberOfCarParking: number;
  numberOfMotorcycleParking: number;
}

export interface CompanyUpdateDTO {
  companyName?: string;
  cnpj?: string;
  companyAddress?: string;
  companyPhone?: number;
  numberOfCarParking?: number;
  numberOfMotorcycleParking?: number;
}

export interface CompanyParkingDTO {
  companyName: string;
  numberOfCarParking?: number;
  numberOfMotorcycleParking?: number;
}
