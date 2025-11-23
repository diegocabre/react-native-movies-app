import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useMemo } from "react";
import {
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// 1. DEFINICIÓN DE CLASES CONSTANTES
// Las clases de Tailwind para el botón de retroceso se pueden definir aquí.
const BACK_BUTTON_CLASSES = "bg-black/50 rounded-full p-2";
const BACK_BUTTON_ICON = "arrow-back";
const HEADER_CONTAINER_CLASSES = "shadow-xl shadow-black/20";
const IMAGE_VIEW_CLASSES = "flex-1 rounded-b-[25px] overflow-hidden";
const TEXT_CONTAINER_CLASSES = "px-5 mt-5";

interface MovieHeaderProps {
  poster: string;
  title: string;
  originalTitle: string;
}

const MovieHeader = ({ poster, title, originalTitle }: MovieHeaderProps) => {
  const { height } = useWindowDimensions();
  // Obtener márgenes seguros
  const { top } = useSafeAreaInsets();

  // 2. CÁLCULO DE ESTILOS DENTRO DE useMemo
  // Esto mantiene los cálculos fuera del JSX y mejora el rendimiento.
  const gradientStyle = useMemo(
    () => ({
      // Calculamos la altura necesaria para la LinearGradient
      height: height * 0.7 + top + 20,
      width: "100%" as const,
      position: "absolute" as const, // Especificamos el tipo para evitar warnings
      top: 0,
      left: 0,
    }),
    [height, top]
  );

  // Estilo para el contenedor del botón de retroceso (calculado con top)
  const backButtonContainerStyle = useMemo(
    () => ({
      // Usamos el margen seguro 'top' + un margen extra (10)
      top: top + 10,
      left: 20,
    }),
    [top]
  );

  // 3. Renderización simplificada con clases de Tailwind
  return (
    <>
      <LinearGradient
        colors={["transparent", "#000"]}
        style={gradientStyle} // Usamos el objeto de estilo calculado
      />

      {/* Botón de retroceso: usando backButtonContainerStyle calculado y clases de Tailwind */}
      <View
        style={backButtonContainerStyle}
        className="absolute z-50 elevation-10"
      >
        <Pressable
          onPress={() => router.back()}
          className={BACK_BUTTON_CLASSES}
        >
          <Ionicons name={BACK_BUTTON_ICON} size={24} color="white" />
        </Pressable>
      </View>

      {/* Contenedor principal de la imagen: usando clases de Tailwind y estilo de altura */}
      <View
        className={HEADER_CONTAINER_CLASSES}
        style={{ height: height * 0.7 }}
      >
        <View className={IMAGE_VIEW_CLASSES}>
          <Image
            source={{ uri: poster }}
            className="flex-1"
            resizeMode="cover"
          />
        </View>
      </View>

      {/* Resto del contenido de texto: usando clases de Tailwind */}
      <View className={TEXT_CONTAINER_CLASSES}>
        <Text className="text-gray-400 text-lg font-normal">
          {originalTitle}
        </Text>
        <Text className="text-2xl font-bold">{title}</Text>
      </View>
    </>
  );
};

export default MovieHeader;
