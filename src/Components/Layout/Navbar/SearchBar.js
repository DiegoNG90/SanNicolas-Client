import { FormControl, Button, Form } from 'react-bootstrap';
import { memo} from 'react';
import { useData } from '../../../Hooks/useData'


const SearchBar = ({ setCharacter }) => {

  const { data } = useData();
  console.log('Data desde SearchBar :>', data);

  const getCharacters = (e) => {
    e.preventDefault();
    setCharacter(e.target.elements[0].value);
  };


  return (
    <Form
      onSubmit={getCharacters}
      className="d-flex justify-content-center w-50"
    >
      <FormControl
        // onChange={(e) => setCharacter(e.target.value)}
        type="text"
        placeholder="Busque productos por categoria ..."
        className="mr-sm-2"
      />
      <Button
        type="submit"
        className="ml-xxl-2"
        variant="outline-info"
        placeholder="Place a product"
      >
        Search
      </Button>
    </Form>
  );
};

export default memo(SearchBar);