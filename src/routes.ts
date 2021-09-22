import { Router } from 'express'
import CadastroController from './controllers/CadastroController'

import { ClienteController } from './controllers/ClienteController'
import { PedidoController } from './controllers/PedidoController'
import { ProdutoController } from './controllers/ProdutoController'

const routes = Router()

routes.post('/cadastros', CadastroController.create)

routes.put('/cadastros/:id', CadastroController.update)

routes.get('/cadastros', CadastroController.list)

routes.get('/cadastros/:id', CadastroController.find)

routes.delete('/cadastros/:id', CadastroController.delete)

// Cliente

const clienteController = new ClienteController
routes.post('/clientes', clienteController.create)
routes.get('/clientes', clienteController.list)
routes.get('/clientes/:id', clienteController.find)
routes.get('/clientes/cidades/:nome', clienteController.lisCity)


routes.put('/clientes/:id', clienteController.update)
routes.delete('/clientes/:id', clienteController.delete)
routes.post('/clientes/:id/telefones', clienteController.addTel)

//Produto
const produtoController = new ProdutoController
routes.post('/produtos', produtoController.create)
routes.get('/produtos', produtoController.list)
routes.get('/produtos/:id', produtoController.find)

//Pedido
const pedidoController = new PedidoController
routes.post('/pedidos', pedidoController.create)
routes.get('/pedidos', pedidoController.list)
routes.get('/pedidos/grid/:nome', pedidoController.view)
routes.get('/pedidos/:id', pedidoController.find)



export default routes