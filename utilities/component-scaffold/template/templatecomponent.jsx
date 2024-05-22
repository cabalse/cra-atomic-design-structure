import { actionTypes, initialArg, reducer } from './templatecomponent.reducer';
import { useEffect, useReducer } from 'react';

import style from './templatecomponent.module.css';

const TemplateComponent = () => {
  const [ state, dispatch ] =
    useReducer( reducer, initialArg );

  useEffect(() => {dispatch( { type: actionTypes.ACTION, payload: 'TemplateComponent' } );}, [] );

  return <p className={ style.baseStyle }>{state}</p>;
};

export default TemplateComponent;
