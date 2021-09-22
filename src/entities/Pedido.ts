import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { PedidoItem } from './PedidoItem';

@Entity('tab_pedidos')
export class Pedido extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "cd_cliente"})
  cliente: number;

  @Column({name: "dh_pedido"})
  dataHora: Date

  @Column({name: "vl_total"})
  valorTotal: number

  @OneToMany(() => PedidoItem, item => item.pedido,
  {cascade: true, eager: true})
  itens: PedidoItem[]
}