import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "SX3dNNkkdZQqHIUVmQZPhWz-5-Q-uGuQmIj8JvvRP9Q",
});

// Fetch fresh photos
export const fetchPhotos = async () => {
  const result = await unsplash.photos.list({ page: 1, perPage: 30 });
  if (result.type === "success") {
    return result.response.results;
  }
  return [];
};

// Fetch photos by query
export const fetchPhotosByQuery = async (query) => {
  const result = await unsplash.search.getPhotos({
    query: query,
    page: 1,
    perPage: 30,
  });
  if (result.type === "success") {
    return result.response.results;
  }
  return [];
};

// Fetch single photo by id
export const fetchPhotoById = async (photoId) => {
  const result = await unsplash.photos.get({ photoId: photoId });
  if (result.type === "success") {
    return result.response;
  }
  return null;
};
