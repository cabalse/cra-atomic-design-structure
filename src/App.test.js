import { render, screen } from '@testing-library/react';
import App from './App';

test( 'Main App component', () => {
  it( 'should render the main App component with the text "Application"', () => {
    render( <App /> );
    expect( screen.getByText( 'Application' ) ).toBeInTheDocument();
  } );
} );
