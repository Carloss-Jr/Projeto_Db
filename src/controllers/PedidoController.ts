import { Request, Response} from 'express'
import { getCustomRepository, getConnection } from 'typeorm'
import { PedidoView } from '../entities/PedidoView'
import { PedidoRepository } from '../repositores/PedidoRepository'

export class PedidoController {
  async create(req: Request, res: Response) {
    const { cliente, dataHora, valorTotal, itens } = req.body
    const repository = getCustomRepository(PedidoRepository)

    let pedido = { cliente, dataHora, valorTotal, itens }
    console.log(pedido)
    
    pedido = await repository.save(pedido)

    return res.status(200).json(pedido)
  }
  async list (req: Request, res: Response) {
    const repository = getCustomRepository(PedidoRepository)
    const data = await repository.find()
    return res.status(200).json({data:data})
  } 
  async find (req: Request, res: Response) {
    const { id } = req.params
    const repository = getCustomRepository(PedidoRepository)
    const data = await repository.findOne(id)

    return res.status(200).json({data:data})
  }
  async view (req: Request, res: Response) {
    const { nome } = req.params

    const data = await getConnection()
    .getRepository(PedidoView)
    .createQueryBuilder("pedidos")
    .where("pedidos.nome = :nome", { nome: nome})
    .getMany()

    return res.status(200).json({data:data})
  }
}