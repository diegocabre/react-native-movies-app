import { getMovieById } from "@/core/actions/movie/get-movie-by-id.actions";
import { getMovieCastById } from "@/core/actions/movie/get-movie-cast.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovie = (id: number | string) => {
  const movieQuery = useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieById(id),
    staleTime: 24 * 60 * 60 * 1000,
  });

  const castQuery = useQuery({
    queryKey: ["cast", id],
    queryFn: () => getMovieCastById(id),
    staleTime: 24 * 60 * 60 * 1000,
  });

  return {
    movieQuery,
    castQuery,
  };
};
