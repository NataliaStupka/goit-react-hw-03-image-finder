//Компонент элемента списка с изображением


const ImagesList = ({ preview, largeImage, tags }) => {
  return (
<li >
      <img
        src={preview}
        alt={tags}
      />
      </li>
  )
};

export default ImagesList;
