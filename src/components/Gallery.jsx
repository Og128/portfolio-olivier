import React, { useState } from 'react';

const Gallery = ({ images, alt }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageError = (e) => {
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSI1MCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzRCNTU2MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjAuM2VtIj5JbWFnZTwvdGV4dD48L3N2Zz4=';
  };

  const openModal = (imageSrc, index) => {
    setSelectedImage({ src: imageSrc, index, total: images.length });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateModal = (direction) => {
    if (!selectedImage) return;
    
    const { index, total } = selectedImage;
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = index === 0 ? total - 1 : index - 1;
    } else {
      newIndex = index === total - 1 ? 0 : index + 1;
    }
    
    setSelectedImage({
      src: images[newIndex],
      index: newIndex,
      total: total
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigateModal('prev');
    } else if (e.key === 'ArrowRight') {
      navigateModal('next');
    }
  };

  if (!images || images.length === 0) {
    return (
      <div className="project-image-placeholder">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGM0Y0RjYiLz48dGV4dCB4PSIyMDAiIHk9IjEwNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNEI1NTYzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iUHJvamVjdCBJbWFnZTwvdGV4dD48L3N2Zz4="
          alt={alt}
          className="project-image"
        />
      </div>
    );
  }

  return (
    <>
      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-grid-item"
            onClick={() => openModal(image, index)}
            role="button"
            tabIndex={0}
            aria-label={`Voir l'image ${index + 1} en grand`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                openModal(image, index);
              }
            }}
          >
            <img
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              className="grid-image"
              onError={handleImageError}
            />
            <div className="image-overlay">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Fermer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <img
              src={selectedImage.src}
              alt={`${alt} - Image ${selectedImage.index + 1}`}
              className="modal-image"
            />

            {images.length > 1 && (
              <>
                <button
                  className="modal-nav-btn modal-prev"
                  onClick={() => navigateModal('prev')}
                  aria-label="Image précédente"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>

                <button
                  className="modal-nav-btn modal-next"
                  onClick={() => navigateModal('next')}
                  aria-label="Image suivante"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>

                <div className="modal-counter">
                  {selectedImage.index + 1} / {selectedImage.total}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;