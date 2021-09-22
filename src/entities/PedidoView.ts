import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('vw_pedido')
export class PedidoView extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "cd_cliente"})
  cliente: number;

  @Column({name: "dh_pedido"})
  dataHora: Date

  @Column({name: "vl_total"})
  valorTotal: number

  @Column({name: "cpf_cnpj"})
  cpfCnpj: string

  @Column()
  nome: string
}