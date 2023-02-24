import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "SX3dNNkkdZQqHIUVmQZPhWz-5-Q-uGuQmIj8JvvRP9Q",
});

// Fetch Fresh Photos
export const fetchPhotos = async () => {
  const result = await unsplash.photos.list({ page: 1, perPage: 30 });
  if (result.type === "success") {
    return result.response.results;
  }
  return [];
};
