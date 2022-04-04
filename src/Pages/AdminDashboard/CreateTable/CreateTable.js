import {
  Form,
  Button,
  OverlayTrigger,
  Tooltip /*, FloatingLabel */,
} from 'react-bootstrap';
// import { FloatingLabel } from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';

const CreateTable = () => {
  const [precio, setPrecio] = useState(0);
  const [decimales, setDecimales] = useState('');

  const getPrecio = (e) => {
    setPrecio(Number(e.target.value));
    if (precio !== '') {
      setDecimales(+precio.toFixed(2));
    }
  };

  const setDate = () => {
    let dd = new Date().getDate();
    let mm = new Date().getMonth();
    let yyyy = new Date().getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const finalDate = dd + '/' + mm + '/' + yyyy;
    return finalDate;
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Coming soon!
    </Tooltip>
  );

  return (
    <Form>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="text" placeholder="Nombre" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripcion del producto</Form.Label>
        <div class="mb-3">
          <textarea class="form-control" id="descripcion" rows="3"></textarea>
        </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="categoria">
        <Form.Label>Categoria del producto</Form.Label>
        <Form.Control type="text" placeholder="Categoria" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripcion del producto</Form.Label>
        <Form.Control type="text" placeholder="Descripcion" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Precio"
          onChange={(e) => getPrecio(e)}
        />
      </Form.Group>

      {/* onChange de precio y setea el value. readOnly*/}

      <Form.Group className="mb-3" controlId="decimales">
        <Form.Label>Decimales del producto</Form.Label>
        <Form.Control type="text" value={decimales} readOnly disabled />
      </Form.Group>

      {/*<FloatingLabel controlId="floatingSelect" label="Works with selects">
        <Form.Select aria-label="Floating label select example">
          <option>Open this select menu</option>
          <option value="ARS">Peso argentino</option>
          <option value="USD">Dolar USD</option>
        </Form.Select>
        </FloatingLabel>*/}
      {/* No funciona, no lo toma y eso que le pase el FloatingLabel en el import de react-bootstrap! */}
      {/* <Form.Group className="mb-3" controlId="moneda">
          <Form.Label>Moneda del producto</Form.Label>
          <Form.Control type="text" placeholder="ARS o USD" />
        </Form.Group> */}

      <Form.Label>Moneda del producto</Form.Label>
      <br />
      <select className="mb-4" name="moneda" id="moneda">
        <option value="ARS">Peso Argentino</option>
        <option value="USD">Dolar USD</option>
      </select>
      <br />

      {/* <Form.Group className="mb-3" controlId="estado">
          <Form.Label>Estado del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Publicado, borrador o eliminado"
          />
        </Form.Group> */}

      <Form.Label>Estado del producto</Form.Label>
      <br />
      <select className="mb-4" name="estado" id="estado">
        <option value="publicado">Publicado</option>
        <option value="eliminado">Eliminado</option>
        <option value="borrador">Borrador</option>
      </select>

      <Form.Group className="mb-3" controlId="nuevo">
        <Form.Check type="checkbox" label="Es nuevo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="fecha_de_alta">
        <Form.Label>Fecha de alta del producto</Form.Label>
        <Form.Control type="text" value={setDate()} readOnly disabled />
      </Form.Group>

      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success" type="button">
          Crear producto
        </Button>
      </OverlayTrigger>
    </Form>
  );
};

export default CreateTable;
