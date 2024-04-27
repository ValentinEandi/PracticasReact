import React from 'react';

const Table = ({ netIncomes }) => {
  const totalIncome = netIncomes.reduce((total, income) => total + income.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((item, index) => (
            <tr key={index}>
              <td>{item.brand}</td>
              <td>{item.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de ingreso neto: {averageIncome}</p>
    </div>
  );
};

export default Table;