import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tab_endereco')
export class Endereco extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;
  
  @Column()
  logradouro: string;
  
  @Column()
  cidade: string

}