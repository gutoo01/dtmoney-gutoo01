import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { Container } from "./style"


interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string
}



export const TransactionsTable = () => {

  // exibir dados em tela 
  // informa o <Tipo de coleção de dados> q será tratado do useState 'interface'

  const [transactions, setTransactions] = useState<Transaction[]>([]);




  // Chamando API estática com hook

  useEffect(() => {
    api.get('transactions')
      .then(res => setTransactions(res.data.transactions))

  }, []);




  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>            {/* Todo primeiro elemento de map() recebe uma 'key' */}
                
                <td>{transaction.title}</td>
                
                <td className={transaction.type}>

                  {/* 'Intl' Lib nativa para formatação de valores */}
                  {new Intl.NumberFormat('pt-BR', {  style: 'currency', currency: 'BRL' }).format(transaction.amount)}
                  </td>
                
                <td>{transaction.category}</td>
                
                <td>

                  {/* 'Intl'  Lib nativa para formatação da Data */}
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}
                </td>

              </tr>
            )
          })}
        </tbody>


      </table>
    </Container>
  )
}