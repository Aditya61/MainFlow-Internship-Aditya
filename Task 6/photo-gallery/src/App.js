import React, { useState } from 'react';
import Image from './Image.js';

const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.keys().indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % images.keys().length;
    setSelectedImage(images.keys()[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.keys().indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + images.keys().length) % images.keys().length;
    setSelectedImage(images.keys()[prevIndex]);
  };

  return (
    <div className="App">
      <div className="galary-container flex flex-wrap gap-2 justify-evenly">
        {images.keys().map((i, index) => (
          <Image key={index} name={i.substr(1)} onClick={() => openModal(i)} />
        ))}
      </div>

      {selectedImage && (
        <div className="modal fixed inset-0 bg-black bg-opacity-75 flex items-center justify-around p-2">
          
            <button className="text-white font-semibold absolute top-2 right-2" onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                                                          </svg>
            </button>
            <button className="text-white font-semibold absolute top-2 left-2" onClick={prevImage}>Previous</button>
            <button className="text-white font-semibold absolute top-2 right-10" onClick={nextImage}>Next</button>
            <img className="w-auto h-fit max-w-full max-h-full" src={require(`./images${selectedImage.substr(1)}`)} alt={selectedImage.substr(1)} />
          
        </div>
      )}
    </div>
  );
}

export default App;
