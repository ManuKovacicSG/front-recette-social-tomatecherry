import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Login from './Login';

// describe('Debe haber una pagina para loguearse', () => {
//     beforeEach(() => render(<Login />))
//     test('renders main page correctly', () => {
//         //screen.debug();
//         expect(true).toBeTruthy()
//     });
//     test('Debe haber un boton para crear una cuenta', ()=>{
//         const button = screen.getByRole('button', {name:'Create account'})
//         expect(button).toBeInTheDocument();
//     })
//     test('Cuando clickeamos en el boton "Create account" nos debe llevar a un formulario para crear un usuario', ()=>{
//         const abrirMockFn = jest.fn();
//         const button = screen.getByRole('button', {name:'Create account'});
//         button.addEventListener('click', abrirMockFn)

//         userEvent.click(button);

//         expect(abrirMockFn).toBeCalled();
//     })

//     test('Debe haber un boton para acceder si ya estoy registrado', ()=>{
//         const button2 = screen.getByRole('button', {name:'Log in'})
//         expect(button2).toBeInTheDocument();
//     })

// })


    //Nos autenticamos o nos registramos. Con conexión entre ambas.
    //Una vez logados nos vamos a la página del profile.