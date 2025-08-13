import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import ModalZoom from "./components/ModalZoom";
import bannerBackground from "./assets/banner.png";

import { useEffect, useState } from "react";
import photos from "./photos.json";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainGallery = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24 px;
`;

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [filter, setFilter] = useState("");
  const [tag, setTag] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const filteredPhotos = photos.filter((photo) => {
      const filteredByTag = !tag || photo.tagId === tag;
      const filteredByTitle =
        !filter || photo.title.toLowerCase().includes(filter.toLowerCase());
      return filteredByTag && filteredByTitle;
    });
    setGalleryPhotos(filteredPhotos);
  }, [filter, tag]);

  const toggleFavorite = (photo) => {
    if (photo.id === selectedPhoto?.id) {
      setSelectedPhoto({
        ...selectedPhoto,
        favorite: !selectedPhoto.favorite,
      });
    }

    setGalleryPhotos(
      galleryPhotos.map((photoGallery) => {
        return {
          ...photoGallery,
          favorite:
            photoGallery.id === photo.id
              ? !photo.favorite
              : photoGallery.favorite,
        };
      })
    );
  };

  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <Sidebar />
          <MainGallery>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              onSelectedPhoto={(photo) => setSelectedPhoto(photo)}
              toggleFavorite={toggleFavorite}
              photos={galleryPhotos}
              setTag={setTag}
            />
          </MainGallery>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        toggleFavorite={toggleFavorite}
      />
    </GradientBackground>
  );
};

export default App;
