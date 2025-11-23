import React from "react";
import { FlatList, Text, View } from "react-native";
import { ActorCard } from "./ActorCard"; // Asegúrate de ajustar la ruta de importación

import { Cast } from "@/core/infrastructure/interfaces/cast.interface";

interface Props {
  cast: Cast[];
}

export const MovieCast = ({ cast }: Props) => {
  if (cast.length === 0) {
    return (
      <View className="px-5 mt-5">
        <Text className="text-gray-500 text-lg">
          No se encontró información del reparto.
        </Text>
      </View>
    );
  }

  return (
    <View className="mt-5">
      {/* Título opcional para la sección */}
      <Text className="text-2xl font-bold px-5 mb-4">Reparto</Text>

      {/* FlatList para renderizar la lista de actores horizontalmente */}
      <FlatList
        data={cast}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ActorCard actor={item} />}
        // Propiedades para desplazamiento horizontal
        horizontal
        showsHorizontalScrollIndicator={false}
        // Añade un padding horizontal al contenido de la lista
        contentContainerStyle={{ paddingHorizontal: 20 }}
        // Optimización de rendimiento
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={10}
      />
    </View>
  );
};
