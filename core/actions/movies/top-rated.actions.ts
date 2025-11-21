import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/core/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

export const topRatedMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/top_rated");
    const movies = data.results.map(MovieMapper.movieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top rated movies";
  }
};
