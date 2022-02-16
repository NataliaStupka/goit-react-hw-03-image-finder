//Компонент элемента списка с изображением
import './ImageGalleryItem.css';

const ImagesList = ({ preview, largeImage, tags }) => {
  return (
<li className="ImageGalleryItem">
      <img
        src={preview}
        alt={tags}
        className="ImageGalleryItem-image"
      />
      </li>
  )
};

export default ImagesList;
