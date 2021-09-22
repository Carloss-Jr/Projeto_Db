import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, JoinColumn} from "typeorm"
import { Cliente } from "./Cliente"
import { TelefoneTipo } from "./TelefoneTipo"

@Entity('tab_cliente_telefone')
export class ClienteTelefone extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, cliente => cliente.telefones)
  @JoinColumn({ name: "cd_cliente" })
  cliente: Cliente

  @Column({
    type: "enum",
    enum: TelefoneTipo,
    name: "tipo"
  })
  tipo: TelefoneTipo

  @Column()
  ddd: number

  @Column()
  numero: number

}