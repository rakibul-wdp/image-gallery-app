import "@fontsource/montserrat";
import "@fontsource/pattaya";
import { Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PhotoGrid from "../components/PhotoGrid";
import PhotoModal from "../components/PhotoModal";
import { useSearchQuery } from "../context/SearchQueryContext";
import { AppThemeProvider } from "../context/ThemeContext";
import {
  fetchPhotoById,
  fetchPhotos,
  fetchPhotosByQuery
} from "../helpers/api";
import Loader from "../helpers/Loader";

const Home = () => {
  const [photos, setPhotos] = useState([]);
  const [modalData, setModalData] = useState();
  const [showHeader, setShowHeader] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const searchQuery = useSearchQuery("");

  useEffect(() => {
    setPhotos([]);
    const delayDebounce = setTimeout(
      () =>
        searchQuery.length > 0
          ? onSearchQueryChanged(searchQuery)
          : onPageLoad(),
      500
    );
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  const handleModalClose = () => setModalOpen(false);

  const onPageLoad = async () => {
    const photos = await fetchPhotos();
    setPhotos(photos);
    setShowHeader(true);
  };

  const onSearchQueryChanged = async (searchQuery) => {
    const photos = await fetchPhotosByQuery(searchQuery);
    setPhotos(photos);
    setShowHeader(false);
  };

  const getPhotoById = async (photoId) => {
    const photo = await fetchPhotoById(photoId);
    setModalData(photo);
  };

  const openModal = (photoId) => {
    setModalData(null);
    setModalOpen(true);
    getPhotoById(photoId);
  };

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
};

export default Home;
