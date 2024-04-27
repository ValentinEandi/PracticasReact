import React from 'react';
import Table from './components/Table';

const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  return (
    <div>
      <h1>Tabla de Ingresos Netos por Compañía</h1>
      <Table netIncomes={netIncomes} />
    </div>
  );
};

export default App;
