export interface VehicleRegisterDTO {
  vehicleBrand: string;
  vehicleModel: string;
  vehicleColor: string;
  vehicleType: string;
  vehiclePlate: string;
}

export interface VehicleUpdateDTO {
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleColor?: string;
  vehicleType?: string;
  vehiclePlate?: string;
}
