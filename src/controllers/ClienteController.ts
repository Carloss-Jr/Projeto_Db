import { Request, Response} from 'express'
import { getConnection, getCustomRepository } from 'typeorm'
import { Cliente } from '../entities/Cliente'
import { ClienteTelefone } from '../entities/ClienteTelefone'

import { ClienteRepository } from '../repositores/ClienteRepository'

class ClienteController {
  async create(req: Request, res: Response) {
    const { cpfCnpj, nome, endereco, telefones} = req.body
    let data = { cpfCnpj, nome, endereco, telefones }

    const repository = getCustomRepository(ClienteRepository)

    data = await repository.save(data)

    return res.status(201).json({data:data})
  }
  async update(req: Request, res: Response) {
    const { id } = req.params
    const {cpfCnpj, nome } = req.body
    const cliente = { cpfCnpj, nome}

    const repository = getCustomRepository(ClienteRepository)
    await repository.update( id, cliente)

    return res.status(200).json({msg: "Cliente alterado com sucesso " + cliente.cpfCnpj})
  }
  async list (req: Request, res: Response) {
    const repository = getCustomRepository(ClienteRepository)
    const data = await repository.find()
    return res.status(200).json({data:data})
  } 
  async find (req: Request, res: Response) {
    const { id } = req.params
    const repository = getCustomRepository(ClienteRepository)
    const data = await repository.findOne(id)

    return res.status(200).json({data:data})
  }
  async delete (req: Request, res: Response) {
    const { id } = req.params
    const repository = getCustomRepository(ClienteRepository)
    await repository.delete(id)

    return res.status(200).json({msg: "Registro deletado" + id})
  }
  async addTel (req: Request, res: Response) {
    const { id } = req.params
    const { ddd, numero, tipo } = req.body

    const repository = getCustomRepository(ClienteRepository)
    const cliente = await repository.findOne(id)

    const telefone = new ClienteTelefone()
    telefone.numero = numero
    telefone.ddd = ddd
    telefone.tipo = tipo
    telefone.cliente = cliente

    console.log(telefone)
    cliente.telefones.push(telefone)

    console.log(cliente)

    await repository.save( cliente )

    return res.status(200).json({msg: "Telefone adicionado com sucesso"})
  }
  async lisCity (req: Request, res: Response) {
    const { nome } = req.params

    const data = await getConnection()
    .getRepository(Cliente)
    .createQueryBuilder("cliente").innerJoin("cliente.endereco", "endereco")
    .where("endereco.cidade = :nome", {nome: nome})
    .getMany()

    return res.status(200).json({ data:data })
  }
}
export { ClienteController }