import {render} from '@testing-library/react'
import Product from '../Product';
import ErrorMessage from '../../Layout/ErrorMessage'

describe("Product", () => {
    let defaultProps;
    beforeEach(()=> {
        defaultProps = {
          data: {
            id: 1,
            nombre: 'pelota',
            descripcion: '',
            decimales: '',
            moneda: '',
          }
        }
    })
     test('Si esta cargando, que no devuelva nada', () => {
       const loading = true;
       const { getByText } = render(<Product />);
       getByText("");
     });
    test("Si hay error, mensaje de error", () => {
        const error = true
        const {getByText} = render(<ErrorMessage />)
        getByText(/el server/i)
    })
    test("Deberia recibir data y renderizar data", () =>{
        const error = false
        const {getByText} = render(<Product data={defaultProps.data}/>)
        getByText(/pelota/i)
    })
})
