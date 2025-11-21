import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/core/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/popular");
    const movies = data.results.map(MovieMapper.movieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load popular movies";
  }
};
