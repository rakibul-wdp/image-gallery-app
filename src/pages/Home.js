import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import PhotoGrid from '../components/PhotoGrid';
import PhotoModal from '../components/PhotoModal';
import Loader from '../helpers/Loader';

const Home = () => {
  return (
    <AppThemeProvider>
      <Paper>
        <Navbar />
        {showHeader ? (
          <Hero />
        ) : (
          <Container>
            <Typography
              pt={12}
              fontWeight="bold"
              variant="h4"
              style={{ textTransform: "capitalize" }}
            >
              {searchQuery}
            </Typography>
          </Container>
        )}
        {photos.length > 0 ? (
          <PhotoGrid photos={photos} onItemClick={openModal} />
        ) : (
          <Loader />
        )}
        <PhotoModal
          photo={modalData}
          open={modalOpen}
          handleClose={handleModalClose}
        />
      </Paper>
    </AppThemeProvider>
  );
}

export default Home