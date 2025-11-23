import { MovieCast } from "@/presentation/components/movie/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import MovieHeader from "@/presentation/components/movie/MovieHeader";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

const MovieScreen = () => {
  const { id } = useLocalSearchParams();

  const { movieQuery, castQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className="flex flex-1 items-center justify-center">
        <Text style={{ textAlign: "center" }}>Loading...</Text>
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  }

  if (movieQuery.isError) {
    return <Text style={{ textAlign: "center" }}>Error</Text>;
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
        poster={movieQuery.data.poster}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCast cast={castQuery.data ?? []} />
    </ScrollView>
  );
};

export default MovieScreen;
