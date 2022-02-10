import { Component } from 'react';
//Компонент элемента списка с изображением

// <li class="gallery-item">
//   <img src="" alt="" />
// </li>;

const ImagesList = ({ images }) => (
  <>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id}>
        <img src={webformatURL} alt=""></img>
      </li>
    ))}
  </>
);

export default ImagesList;
