import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tab_produto')
export class Produto extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "cd_barras"})
  codigoBarras: string;

  @Column({name: "nome"})
  nome: string

  @Column({name: "vl_unit"})
  valorUnitario: number
}