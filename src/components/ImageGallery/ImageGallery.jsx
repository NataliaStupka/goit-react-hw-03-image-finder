//Список карточек изображений
import ImagesList from '../ImageGalleryItem/ImageGalleryItem';


const ImageGallery = ({images}) => {
//  console.log('Масив обьектов', images)
    return (
      
      <ul className="gallery">
        {images.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImagesList
              key={id}
              preview={webformatURL}
              largeImage={largeImageURL}
              tags={tags}
            />
          
          )
        })}
        
      </ul>
        
     
    );
  
}

export default ImageGallery;






