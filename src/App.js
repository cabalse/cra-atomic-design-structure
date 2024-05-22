import CreateMirageServer from './mirage/create-mirage-server';

import './App.module.css';

if (process.env.REACT_APP_MODE === 'development') {
  CreateMirageServer();
}

function App () {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="flex flex-row items-center justify-center m-10">
          <div>
            <div>Col 1</div>
          </div>
          <div>
            <div>Col 2</div>
          </div>
        </div>
    </div>
  );
}

export default App;
