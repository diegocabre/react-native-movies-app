import MainSlideshow from "@/presentation/components/movies/MainSlideshow";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import React from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  const {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcomingMoviesQuery,
  } = useMovies();

  if (nowPlayingQuery.isLoading || popularMoviesQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={40} />
      </View>
    );
  }
  return (
    <ScrollView>
      <View className="mt-3 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
        {/* Carousel Main Slideshow */}
        <MainSlideshow movies={nowPlayingQuery.data ?? []} />

        {/* Horizontal List Popular Movies */}
        <MovieHorizontalList
          title="Popular Movies"
          movies={popularMoviesQuery.data ?? []}
        />
        {/* Horizontal List Top Rated Movies */}
        <MovieHorizontalList
          title="Top Rated Movies"
          movies={topRatedMoviesQuery.data ?? []}
        />
        {/* Horizontal List Upcoming Movies */}
        <MovieHorizontalList
          title="Upcoming Movies"
          movies={upcomingMoviesQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
