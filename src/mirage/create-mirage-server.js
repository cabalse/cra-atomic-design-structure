import { createServer } from 'miragejs'

const CreateMirageServer = () => {
  return createServer( {
    routes () {
      this.namespace = 'api';
      this.get( '/data', () =>         [
        { id: 1, data: 'mirage-A' },
        { id: 2, data: 'mirage-B' },
        { id: 3, data: 'mirage-C' },
      ]
      );
    }
  } );
}      

export default CreateMirageServer;
