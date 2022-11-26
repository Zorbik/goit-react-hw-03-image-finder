import { ImageGalleryItemImg, ImageGalleryItems } from './ImageGallery.styled';

export const ImageGalleryItem = ({ image }) => {
  const { webformatURL, largeImageURL, tags } = image;

  return (
    <ImageGalleryItems data-link={largeImageURL}>
      <ImageGalleryItemImg src={webformatURL} alt={tags} width="320" />
    </ImageGalleryItems>
  );
};
