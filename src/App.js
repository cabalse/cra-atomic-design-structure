import { useEffect, useState } from 'react';
import CreateMirageServer from './mirage/create-mirage-server';

import getData from './services/api';

import './App.module.css';

if (process.env.REACT_APP_MODE === 'development') {
  CreateMirageServer();
}

function App () {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(data => {
      setData(data.data);
    });
  }, []);

  return (
    <div>
      <div>Application</div>
      <div>
        <div>Mode: {process.env.REACT_APP_MODE}</div>
      </div>
      <div>
        <div>Data: {data.map(data => <div key={data.id}>{data.data}</div>)}</div>
      </div>
    </div>
  );
}

export default App;
