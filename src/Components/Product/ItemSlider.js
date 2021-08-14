import {useState} from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'react-bootstrap';
import './style.css';

const ItemSlider = ({photos}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  console.log("Photos from ItemSlider", photos)
  return (
    <Carousel
      fade
      activeIndex={index}
      onSelect={handleSelect}
      nextLabel=""
      prevLabel=""
    >
      {photos.length > 0 &&
        photos?.map((photo) => {
          return (
            <Carousel.Item className="img__height">
              <img
                className="d-block w-100"
                src={photo.foto_url}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

ItemSlider.propTypes = {
  photos: PropTypes.array.isRequired,
};

export default ItemSlider;
