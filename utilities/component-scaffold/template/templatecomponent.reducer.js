const actionTypes = Object.freeze( {
  ACTION: 'action',
} );

const initialArg = 'TemplateComponent';

const reducer = ( state, action ) => {
  switch ( action.type ) {
  case actionTypes.ACTION:
    return action.payload;
  default:
    return action.payload;
  }
};

export { reducer, initialArg, actionTypes };
