import { Request, Response} from 'express'
import { getCustomRepository } from 'typeorm'
import { ProdutoRepository } from '../repositores/ProdutoRepository'

class ProdutoController {
  async create(req: Request, res: Response) {
    const { codigoBarras, nome, valorUnitario } = req.body
    const repository = getCustomRepository(ProdutoRepository)

    let produto = { codigoBarras, nome, valorUnitario}
    produto = await repository.save(produto)

    return res.status(200).json(produto)
  }
  async list (req: Request, res: Response) {
    const repository = getCustomRepository(ProdutoRepository)
    const data = await repository.find()
    return res.status(200).json({data:data})
  } 
  async find (req: Request, res: Response) {
    const { id } = req.params
    const repository = getCustomRepository(ProdutoRepository)
    const data = await repository.findOne(id)

    return res.status(200).json({data:data})
  }
  async delete (req: Request, res: Response) {
    const { id } = req.params
    const repository = getCustomRepository(ProdutoRepository)
    await repository.delete(id)

    return res.status(200).json({msg: "Registro deletado" + id})
  }

}

export {ProdutoController} 