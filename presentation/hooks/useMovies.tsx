import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesAction } from "@/core/actions/movies/popular.actions";
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.actions";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.actions";

import { useInfiniteQuery } from "@tanstack/react-query"; // ¡Solo necesitamos useInfiniteQuery ahora!

export const useMovies = () => {
  const staleTime = 24 * 60 * 60 * 1000; // Constante para evitar repetición

  // 1. Now Playing (Cambiado a useInfiniteQuery)
  const nowPlayingQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "nowPlaying"],
    queryFn: ({ pageParam = 1 }) => {
      // La función debe aceptar pageParam
      return nowPlayingAction({ page: pageParam, limit: 10 });
    },
    staleTime,
    // Definimos la lógica para la paginación infinita
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    getPreviousPageParam: (firstPage, pages) => pages.length - 1,
  });

  // 2. Popular Movies (Cambiado a useInfiniteQuery)
  const popularMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "popular"],
    queryFn: ({ pageParam = 1 }) => {
      // La función debe aceptar pageParam
      return popularMoviesAction({ page: pageParam, limit: 10 });
    },
    staleTime,
    // Definimos la lógica para la paginación infinita
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    getPreviousPageParam: (firstPage, pages) => pages.length - 1,
  });

  // 3. Top Rated Movies (Se mantiene useInfiniteQuery)
  const topRatedMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRated"],
    queryFn: ({ pageParam = 1 }) => {
      return topRatedMoviesAction({ page: pageParam, limit: 10 });
    },
    staleTime,
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    getPreviousPageParam: (firstPage, pages) => pages.length - 1,
  });

  // 4. Upcoming Movies (Cambiado a useInfiniteQuery)
  const upcomingMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "upcoming"],
    // ¡Asegúrate de que queryFn use el pageParam!
    queryFn: ({ pageParam = 1 }) => {
      return upcomingMoviesAction({ page: pageParam, limit: 10 });
    },
    staleTime,
    // Definimos la lógica para la paginación infinita
    getNextPageParam: (lastPage, pages) => pages.length + 1,
    getPreviousPageParam: (firstPage, pages) => pages.length - 1,
  });

  return {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  };
};
