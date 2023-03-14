import { render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../src/03-examples";

describe('Pruebas en MultipleCustomHook', () => { 

    test('debe Mostrar el componente Por defecto', () => { 

        render(<MultipleCustomHook/>);

        expect( screen.getByText('Loading...'));
        expect( screen.getByText('Breaking Bad Quotes'));

        const nextButton = screen.getByRole('button', { name: 'Next Quote' });
        expect( nextButton.disabled ).toBeTruthy();

        screen.debug();

     });

 });