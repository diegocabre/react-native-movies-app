import { Movies } from "@/core/infrastructure/interfaces/movie.interface";
import React, { useEffect, useRef } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";
import MoviePoster from "./MoviePoster";

interface Props {
  title?: string;
  movies: Movies[];
  className?: string;
  loadMoreMovies?: () => void;
}

const MovieHorizontalList = ({
  title,
  movies,
  loadMoreMovies,
  className,
}: Props) => {
  const isLoading = useRef<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    const { contentOffset, layoutMeasurement, contentSize } = e.nativeEvent;
    const isEnd =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEnd) return;
    isLoading.current = true;
    console.log("Cargando más películas");
    loadMoreMovies && loadMoreMovies();
  };

  return (
    <View className={className}>
      {title && <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>}
      <FlatList
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        horizontal
        className={className}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MovieHorizontalList;
