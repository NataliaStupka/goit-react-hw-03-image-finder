//Список карточек изображений
import { Component } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    image: '',
   
    status: Status.IDLE,
  };

  // componentDidMount() {
  //   const API_Key = '24451783-36fc53d78d658727e466a2b4b';
  //   const BASE_URL = 'https://pixabay.com';
  //   fetch(
  //     `${BASE_URL}/api/?q=cat&page=1&key=${API_Key}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(res => res.json())
  //     .then(image => this.setState({ image }))
  //   console.log('хер знает что ???', this.state.image)
  // }



  render() {
    return (
      <div>
        
          <div>
          {this.props.imageName}
          <img src="" alt=""></img>

            <ul className="gallery">
              <li> Набор li с изображениями </li>
            </ul>
          </div>
     
      </div>
    );
  }



}

 
  // render() {
  //   return (
  //     <div>
  //       {this.state.card && (
  //         <div>
  //           {this.props.imageName}
  //           <ul className="gallery">
  //             <li> Набор li с изображениями </li>
  //           </ul>
  //         </div>
  //     )}
  //     </div>
  //   );
  // }

{/*      */}


// приходит с бека
// [{id: 2536662, pageURL: "https://pixabay.com/photos/cat-flower-kitten-stone-pet-2536662/",…},…]

// collections: 6636
// comments: 258
// downloads: 267078
// id: 2536662
// imageHeight: 3056
// imageSize: 3178484
// imageWidth: 4592
// largeImageURL: "https://pixabay.com/get/g239c84555ac863d75847ce757ae95723aaa922b6ac34231bd30d8f8ed8f708d63afe87341295882960bb8982b5fa9fa2d94d421b64aef8221512f67ca87dc0fd_1280.jpg"
// likes: 1537
// pageURL: "https://pixabay.com/photos/cat-flower-kitten-stone-pet-2536662/"
// previewHeight: 99
// previewURL: "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_150.jpg"
// previewWidth: 150
// tags: "cat, flower, kitten"
// type: "photo"
// user: "Dimhou"
// userImageURL: "https://cdn.pixabay.com/user/2021/03/13/05-49-15-380_250x250.jpeg"
// user_id: 5987327
// views: 503359
// webformatHeight: 425
// webformatURL: "https://pixabay.com/get/ge40a55db6d75fd50e6d23d5a614162cfed52b09c92acf59070bdb607fa57335902e08871ca9f0aee5bdea8f1adfcf4bbc3ab52b084eb09c8b480a0fd4a694ffc_640.jpg"
// webformatWidth: 640
