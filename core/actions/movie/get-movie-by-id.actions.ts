import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/core/infrastructure/interfaces/movie.interface";
import { MovieDBResult } from "@/core/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

export const getMovieById = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDBResult>(`/${id}`);
    return MovieMapper.movieDBToCompleteMovie(data);
  } catch (error) {
    console.log("Error al cargar la película", error);
    throw "Cannot load movie";
  }
};
