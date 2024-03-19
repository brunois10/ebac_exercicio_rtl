import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test <App />', () => {
    test('Renderizar corretamente', () => {
        render(
            <App />
        );
        expect(screen.getByTestId('comment-button')).toBeInTheDocument();
    });
})