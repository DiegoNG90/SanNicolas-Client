import { Form, Button } from 'react-bootstrap';

const CreateTable = () => {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripcion del producto</Form.Label>
          <Form.Control type="text" placeholder="Descripcion" />
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
          <Form.Control type="text" placeholder="precio" />
        </Form.Group>

        {/* onChange de precio y setea el value */}

        <Form.Group className="mb-3" controlId="decimales">
          <Form.Label>Decimales del producto</Form.Label>
          <Form.Control type="text" value="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="moneda">
          <Form.Label>Moneda del producto</Form.Label>
          <Form.Control type="text" placeholder="Descripcion" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
}

export default CreateTable;