import { EntityRepository, Repository } from 'typeorm'
import { Pedido } from '../entities/Pedido'

@EntityRepository(Pedido)
class PedidoRepository extends Repository <Pedido> {

}

export {PedidoRepository}
