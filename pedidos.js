import { PedidoView } from "./src/views/PedidoView.js";
import { PedidoController } from "./src/controllers/PedidoController.js";

const pedidoView = new PedidoView("main");
const pedidoController = new PedidoController(pedidoView);
pedidoController.inicializar();


