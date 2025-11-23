import { Cast, MovieDBCast } from "../interfaces/cast.interface";
import { CompleteMovie, Movies } from "../interfaces/movie.interface";
import { MovieDBResult } from "../interfaces/moviedb-movie.response";
import { Result } from "../interfaces/moviedb-response";

export class MovieMapper {
  static movieDBToMovie = (movie: Result): Movies => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
    };
  };
  static movieDBToCompleteMovie = (movie: MovieDBResult): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date),
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      rating: movie.vote_average,
      budget: movie.budget,
      revenue: movie.revenue,
      duration: movie.runtime,
      productionCompanies: movie.production_companies.map(
        (company) => company.name
      ),
      originalTitle: movie.original_title,
      genres: movie.genres.map((genre) => genre.name),
    };
  };
  static movieDBToCast = (cast: MovieDBCast[]): Cast[] => {
    return cast.map((actor) => ({
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png",
    }));
  };
}
