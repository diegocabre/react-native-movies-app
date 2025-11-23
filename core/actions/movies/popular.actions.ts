import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/core/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

interface PopularMoviesAction {
  page?: number;
  limit?: number;
}

export const popularMoviesAction = async ({
  page = 1,
  limit = 10,
}: PopularMoviesAction) => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/popular", {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.movieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load popular movies";
  }
};
