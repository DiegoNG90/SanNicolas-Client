import { render, waitForElement } from '@testing-library/react';
import Product from '../Product';
import ErrorMessage from '../../Layout/ErrorMessage';
import axiosMock from 'axios';
import { useAxios } from '../../../Hooks/useAxios';

describe('Product and useAxios', () => {
  let defaultProps;
  beforeEach(() => {
    defaultProps = {
      data: {
        id: 1,
        nombre: 'pelota',
        descripcion: '',
        decimales: '',
        moneda: '',
      },
    };
  });
  test('Llama a la api y muestra la data', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        id: 1,
        nombre: 'pelota',
        descripcion: '',
        decimales: '',
        moneda: '',
      },
    });
    const url = '/products';
    const { getByTestId } = render(<useAxios url={url} />);

    expect(getByTestId('loading')).toHaveTextContent('');

    const resolved = await waitForElement(() => getByTestId('resolved'));
    expect(resolved).toHaveTextContent('pelota');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
  });
  test('Si esta cargando, que no devuelva nada', () => {
    const loading = true;
    const { getByText } = render(<Product />);
    getByText('');
  });
  test('Si hay error, mensaje de error', () => {
    const error = true;
    const { getByText } = render(<ErrorMessage />);
    getByText(/el server/i);
  });
  test('Deberia recibir data y renderizar data', () => {
    const error = false;
    const { getByText } = render(<Product data={defaultProps.data} />);
    getByText(/pelota/i);
  });
});
