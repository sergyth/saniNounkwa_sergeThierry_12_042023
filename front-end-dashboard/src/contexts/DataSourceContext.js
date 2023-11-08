
import React, { createContext, useContext, useState } from 'react';

const DataSourceContext = createContext();

export const useDataSourceContext = () => {
  return useContext(DataSourceContext);
};

export const DataSourceProvider = ({ children }) => {
  const [useLocalData, setUseLocalData] = useState(true);
console.log(useLocalData)
  const toggleDataSource = (value) => {
    setUseLocalData(value);
  };

  return (
    <DataSourceContext.Provider value={{ useLocalData, toggleDataSource }}>
      {children}
    </DataSourceContext.Provider>
  );
};
