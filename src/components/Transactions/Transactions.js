import "./Transactions.css"

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map(transaction => (
        <tbody key={transaction.id}>
          <tr>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
