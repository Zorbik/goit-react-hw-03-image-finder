import { ImageGalleryItem } from './ImageGalleryItem';
import { Box } from '../Box';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <Box as="main">
      <ImageGalleryList onClick={onClick}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ImageGalleryList>
    </Box>
  );
};
