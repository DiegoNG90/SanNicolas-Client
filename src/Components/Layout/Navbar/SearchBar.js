import { FormControl, Button, Form } from 'react-bootstrap';
import { useState, memo } from 'react';
// import { useSearch } from '../../../Hooks/useSearch'
// import { useAxios } from '../../../Hooks/useAxios'

const SearchBar = () => {
    const [ character,  setCharacter] = useState("")
    console.log("character", character)
    const getCharacters = (e) => {
        e.preventDefault();
        setCharacter(e.target.elements);
    }

    return (
      <Form
        onSubmit={getCharacters}
        className="d-flex justify-content-center w-50"
      >
        <FormControl
          onChange={(e) => setCharacter(e.target.value)}
          type="text"
          placeholder="Search"
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
}

export default memo(SearchBar);