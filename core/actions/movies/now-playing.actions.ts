import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/core/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

interface NowPlayingMoviesAction {
  page?: number;
  limit?: number;
}

export const nowPlayingAction = async ({
  page = 1,
  limit = 10,
}: NowPlayingMoviesAction) => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>("/now_playing", {
      params: {
        page,
        limit,
      },
    });
    const movies = data.results.map(MovieMapper.movieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now playing movies";
  }
};
