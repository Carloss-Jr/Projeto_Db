import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('tab_cliente')
export class Cadastro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpf_cnpj: string;

  @Column()
  nome: string
}