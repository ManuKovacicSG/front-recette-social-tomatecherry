import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Homepage de la Tomatecherry app', () => {
    beforeEach(() => render(<Home />))
    test('renders main page correctly', () => {
        //screen.debug();
        expect(true).toBeTruthy()
    })

    test('Debe tener un video de background', 
    ()=>{
        const video = screen.getByLabelText('video')
        expect(video).toBeInTheDocument();
    })

    test('Debe tener un boton que nos lleve a la social page',
    ()=>{
        const button = screen.getByRole('button', {name:'Bon appetit'})
        expect(button).toBeInTheDocument();
    })
})
// HOMEPAGE con vídeo de presentación (qué tal un vídeo corto de un huevo friéndose) 
// y un botón de “Bon appetit” que nos lleve a la SOCIAL-PAGE.