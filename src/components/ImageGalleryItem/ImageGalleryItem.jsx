//Компонент элемента списка с изображением
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

export default ImagesList;
