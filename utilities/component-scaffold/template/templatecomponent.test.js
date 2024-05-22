import { render } from '@testing-library/react';

import TemplateComponent from './templatecomponent';

describe( 'TemplateComponent rendering specification', () => {
  it( 'TemplateComponent is rendered', () => {
    render( <TemplateComponent /> );
    expect( screen.getByText( 'TemplateComponent' ) ).toBeInTheDocument();
  } );
} );
