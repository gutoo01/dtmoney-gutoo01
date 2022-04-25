import { createServer, Model } from 'miragejs';
import ReactDOM from 'react-dom/client';
import Modal from 'react-modal';
import { App } from './App';


// Servidor de Rotas

createServer({ 

  // DB interno no MirageJS

  models: {
    transaction: Model,
  },
  
  // Dados pré-carregados 

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer Startup',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:32:01'),
        },
        {
          id: 2,
          title: 'Compras',
          type: 'withdraw',
          category: 'Alimentos',
          amount: 600,
          createdAt: new Date('2021-02-18 16:32:01'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    // Rota GET
    this.get('/transactions', () => {
      
      return this.schema.all('transaction');
    })

    // Rota POST 'schema' refere-se ao DB do MirageJS

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody)

      console.log(data);
      

      return schema.create('transaction', data) 
    })

  }
})




Modal.setAppElement('#root');
// documentação do Modal





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( <App /> );
