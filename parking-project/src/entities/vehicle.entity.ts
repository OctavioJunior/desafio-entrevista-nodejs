import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  vehicleBrand: string;

  @Column({ length: 50 })
  vehicleModel: string;

  @Column({ length: 50 })
  vehicleColor: string;

  @Column({ length: 50 })
  vehicleType: string;

  @Column({ length: 15 })
  vehiclePlate: string;
}
