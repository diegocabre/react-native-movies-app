import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/core/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

interface UpcomingMoviesAction {
  page?: number;
  limit?: number;
}

export const upcomingMoviesAction = async ({
  page = 1,
  limit = 10,
}: UpcomingMoviesAction) => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/upcoming", {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.movieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load upcoming movies";
  }
};
