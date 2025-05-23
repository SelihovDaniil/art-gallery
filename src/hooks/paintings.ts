import type { Author, Location, Painting, PaintingExtended } from "@/types";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getAuthors() {
  const res = await axios.get<Author[]>(`${import.meta.env.VITE_API_URL}/authors`);
  return res.data;
}
async function getLocations() {
  const res = await axios.get<Location[]>(`${import.meta.env.VITE_API_URL}/locations`);
  if (!res.data)
    return;
  return res.data;
}
async function getPaintings(page: number, limit: number, query: string) {
  const res = await axios.get<Painting[]>(`${import.meta.env.VITE_API_URL}/paintings?_page=${page}&_limit=${limit}&q=${query}`);

  const totalCount = Number(res.headers["x-total-count"]);
  return { totalPages: Math.ceil(totalCount / limit), data: res.data };
}

export function usePaintings(page: number, limit: number, query: string) {
  const paintingsQuery = useQuery ({ queryKey: ["paintings", page, query, limit], queryFn: () => getPaintings(page, limit, query) });
  const authorsQuery = useQuery({ queryKey: ["authors"], queryFn: getAuthors });
  const locationsQuery = useQuery({ queryKey: ["locations"], queryFn: getLocations });

  const isLoading = paintingsQuery.isLoading || authorsQuery.isLoading || locationsQuery.isLoading;
  const isError = paintingsQuery.isError || authorsQuery.isError || locationsQuery.isError;

  const data: PaintingExtended[] = paintingsQuery.data?.data?.map((painting) => {
    const author = authorsQuery.data?.find(a => a.id === painting.authorId);
    const location = locationsQuery.data?.find(l => l.id === painting.locationId);

    return {
      ...painting,
      author: author?.name || "Unknown Author",
      location: location?.location || "Unknown Location",
    };
  }) || [];

  return { data, isLoading, isError, totalPages: paintingsQuery.data?.totalPages || 1 };
}
