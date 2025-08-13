import Title from "../Title";
import Tags from "./Tags";
import Popular from "./Popular";
import Image from "./Image";
import styled from "styled-components";

const GalleryContainer = styled.div`
  display: flex;
`;
const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Gallery = ({ photos = [], onSelectedPhoto, toggleFavorite, setTag }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GalleryContainer>
        <FluidSection>
          <Title>Navegue pela galeria</Title>
          <ImagesContainer>
            {photos.map((photo) => (
              <Image
              onRequestedZoom={onSelectedPhoto}
              toggleFavorite={toggleFavorite}
              key={photo.id} 
              photo={photo} />
            ))}
          </ImagesContainer>
        </FluidSection>
        <Popular />
      </GalleryContainer>
    </>
  );
};

export default Gallery;
