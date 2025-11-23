export interface Movies {
  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  poster: string;
  backdrop: string;
  rating: number;
}

export interface CompleteMovie extends Movies {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
  revenue: number;
}
