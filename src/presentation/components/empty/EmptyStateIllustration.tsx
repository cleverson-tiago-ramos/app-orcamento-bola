// src/presentation/components/empty/EmptyStateIllustration.tsx
import React from "react";
import { View, ViewStyle } from "react-native";
import Svg, { G, Circle, Rect, Path, Line } from "react-native-svg";

type Props = {
  size?: number; // tamanho total (px)
  stroke?: string; // cor da linha do desenho
  bgCircle?: string; // círculo de fundo
  accent?: string; // cor da borda do "!" (opcional)
  style?: ViewStyle;
};

export default function EmptyStateIllustration({
  size = 120,
  stroke = "#BFC6CC",
  bgCircle = "#EAF4F2",
  accent = "#BFC6CC",
  style,
}: Props) {
  // viewBox 0..120 para facilitar escala
  return (
    <View style={style}>
      <Svg width={size} height={size} viewBox="0 0 120 120">
        {/* círculo de fundo (à esquerda) */}
        <Circle cx={36} cy={48} r={22} fill={bgCircle} />

        {/* pontinhos decorativos */}
        <Circle cx={27} cy={48} r={2} fill={stroke} opacity={0.45} />
        <Circle cx={33} cy={56} r={2} fill={stroke} opacity={0.45} />
        <Circle cx={45} cy={42} r={2} fill={stroke} opacity={0.45} />
        {/* “x” */}
        <G opacity={0.55}>
          <Line
            x1={25}
            y1={54}
            x2={31}
            y2={48}
            stroke={stroke}
            strokeWidth={2}
            strokeLinecap="round"
          />
          <Line
            x1={31}
            y1={54}
            x2={25}
            y2={48}
            stroke={stroke}
            strokeWidth={2}
            strokeLinecap="round"
          />
        </G>

        {/* documento (retângulo com dobra) */}
        <Rect
          x={44}
          y={26}
          width={42}
          height={62}
          rx={6}
          fill="none"
          stroke={stroke}
          strokeWidth={3}
        />
        {/* dobra no topo-direito */}
        <Path
          d="M80 26 L86 32 L80 32 Z"
          fill="none"
          stroke={stroke}
          strokeWidth={3}
          strokeLinejoin="round"
        />

        {/* badge de exclamação sobreposto à direita */}
        <Circle cx={92} cy={58} r={14} fill="#FFFFFF" />
        <Circle
          cx={92}
          cy={58}
          r={14}
          fill="none"
          stroke={accent}
          strokeWidth={3}
        />
        {/* “!” */}
        <Line
          x1={92}
          y1={50.5}
          x2={92}
          y2={62}
          stroke={accent}
          strokeWidth={3}
          strokeLinecap="round"
        />
        <Circle cx={92} cy={66.5} r={1.8} fill={accent} />
      </Svg>
    </View>
  );
}
