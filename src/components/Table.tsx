import { useSelector } from 'react-redux';
import { GlobalTypes } from '../types';

function Table() {
  const { wallet: { expenses } } = useSelector((state: GlobalTypes) => state);

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item: any) => (
          <tr key={ item.id }>
            <td>{item.description}</td>
            <td>{item.tag}</td>
            <td>{item.method}</td>
            <td>{Number(item.value).toFixed(2)}</td>
            <td>{item.exchangeRates[item.currency].name}</td>
            <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
            <td>
              {Number(item.exchangeRates[item.currency].ask * item.value)
                .toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button>Editar</button>
              <button>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
