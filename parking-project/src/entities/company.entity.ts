import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  companyName: string;

  @Column({ length: 20, unique: true })
  cnpj: string;

  @Column({ length: 255 })
  companyAddress: string;

  @Column('bigint')
  companyPhone: number;

  @Column('int')
  numberOfCarParking: number;

  @Column('int')
  numberOfMotorcycleParking: number;

  @Column('int', { default: 0 })
  availableCarSlot: number;

  @Column('int', { default: 0 })
  availableMotorcycleSlot: number;
}
