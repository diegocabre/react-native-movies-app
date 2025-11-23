import { movieApi } from "@/core/api/movie-api";
import {
  Cast,
  CreditsResponse,
} from "@/core/infrastructure/interfaces/cast.interface";
import { MovieMapper } from "@/core/infrastructure/mappers/movie.mapper";

export const getMovieCastById = async (
  id: number | string
): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${id}/credits`);
    return MovieMapper.movieDBToCast(data.cast);
  } catch (error) {
    console.log("Error al cargar el cast", error);
    throw "Cannot load movie cast";
  }
};
