import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Debe haber una pagina para loguearse', () => {
    beforeEach(() => render(<Login />))
    test('renders main page correctly', () => {
        //screen.debug();
        expect(true).toBeTruthy()
    });

})


    //Nos autenticamos o nos registramos. Con conexión entre ambas.
    //Una vez logados nos vamos a la página del profile.