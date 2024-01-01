import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ExpensesType, GlobalTypes } from '../../types';
import { editExpense, updateExpense } from '../../redux/actions';
import { Container } from './style';

function Table() {
  const { wallet: { expenses } } = useSelector((state: GlobalTypes) => state);
  const dispatch: Dispatch = useDispatch();

  const handleEdit = (id: number | undefined) => {
    const idToEdit = expenses
      .find((expense: Pick<ExpensesType, 'id'>) => expense.id === id);
    dispatch(editExpense(idToEdit?.id));
  };

  const handleRemove = (id: number) => {
    const remove = expenses.filter((expense) => expense.id !== id);
    dispatch(updateExpense(remove));
  };

  return (
    <Container>
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
                <button
                  data-testid="edit-btn"
                  onClick={ () => handleEdit(item.id) }
                >
                  <img src="Editar.svg" alt="Editar" />

                </button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => handleRemove(item.id) }
                >
                  <img src="Delete.svg" alt="Delete" />

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Table;
