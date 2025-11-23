import { Formatters } from "@/config/helpers/formatters";
import { CompleteMovie } from "@/core/infrastructure/interfaces/movie.interface";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

interface MovieDescriptionProps {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
  return (
    <View className="px-5 mt-5">
      <View className="flex-row items-center">
        <Text className="text-2xl font-bold">
          <Ionicons
            name="star"
            size={24}
            color="yellow"
            style={{
              shadowColor: "black",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
            }}
          />
          {movie.rating}
        </Text>
        <Text className="ml-2"> - {movie.genres.join(", ")}</Text>
      </View>
      <Text className="mt-5 font-bold">Descripción:</Text>
      <Text className="mt-2">{movie.description}</Text>

      <Text className="text-2xl mt-2 font-bold">
        {Formatters.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
