import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  companyName: string;

  @Column({ length: 20 })
  cnpj: string;

  @Column({ length: 255 })
  companyAddress: string;

  @Column('bigint')
  companyPhone: number;

  @Column('int')
  numberOfCarParking: number;

  @Column('int')
  numberOfMotorcycleParking: number;
}
