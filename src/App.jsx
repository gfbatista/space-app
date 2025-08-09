import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import ModalZoom from "./components/ModalZoom";
import bannerBackground from "./assets/banner.png";

import { useState } from "react";
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
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  return (
    <GradientBackground>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <Sidebar />
          <MainGallery>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Gallery
              onSelectedPhoto={(photo) => setSelectedPhoto(photo)}
              photos={galleryPhotos}
            />
          </MainGallery>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </GradientBackground>
  );
};

export default App;
