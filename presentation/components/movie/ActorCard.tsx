import React from "react";
import { Image, Text, View } from "react-native";

import { Cast } from "@/core/infrastructure/interfaces/cast.interface";

interface Props {
  actor: Cast;
}

export const ActorCard = ({ actor }: Props) => {
  // URL de la imagen (deberías construir la URL completa aquí o en un hook si es necesario)
  const imageUrl = actor.avatar;

  return (
    // Contenedor principal para cada actor
    <View className="mr-4 w-[100px] items-start">
      {/* Imagen del actor */}
      <View className="rounded-xl overflow-hidden shadow-lg shadow-black/40">
        <Image
          source={{ uri: imageUrl }}
          // Dimensiones fijas para el thumbnail del actor
          className="w-[100px] h-[150px]"
          resizeMode="cover"
        />
      </View>

      {/* Información de texto */}
      <View className="mt-2">
        {/* Nombre del actor */}
        <Text numberOfLines={2} className="font-bold text-sm text-gray-800">
          {actor.name}
        </Text>
        {/* Personaje */}
        <Text numberOfLines={2} className="text-xs text-gray-600">
          {actor.character || "N/A"}
        </Text>
      </View>
    </View>
  );
};
