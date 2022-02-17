//Компонент элемента списка с изображением
import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

const ImagesList = ({ preview, largeImage, tags, onOpenModal }) => {
  return (
<li className="ImageGalleryItem">
      <img
        src={preview}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onOpenModal(largeImage)}
      />
      </li>
  )
};

ImagesList.propTypes = {
  preview: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenModal:  PropTypes.func.isRequired,
}

export default ImagesList;
