//Список карточек изображений
import PropTypes from 'prop-types';
import ImagesList from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css'


const ImageGallery = ({images, onOpenModal}) => {
//  console.log('Масив обьектов', images)
    return (
      
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImagesList
              key={id}
              preview={webformatURL}
              largeImage={largeImageURL}
              tags={tags}
              onOpenModal={onOpenModal}
            />
          
          )
        })} 
      </ul>
    );

}


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onOpenModal:  PropTypes.func.isRequired,
}

export default ImageGallery;






