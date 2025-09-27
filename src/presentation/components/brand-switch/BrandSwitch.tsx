import React from "react";
import { Switch, useColorScheme, Platform } from "react-native";
import { SWITCH_COLORS } from "@/theme/colors";

type Props = { value: boolean; onValueChange: (v: boolean) => void };

export function BrandSwitch({ value, onValueChange }: Props) {
  const isDark = useColorScheme() === "dark";

  const trackColor = {
    false: isDark ? SWITCH_COLORS.trackOffDark : SWITCH_COLORS.trackOffLight,
    true: isDark ? SWITCH_COLORS.trackOnDark : SWITCH_COLORS.trackOnLight,
  };
  const thumbColor = value
    ? SWITCH_COLORS.thumbOn
    : isDark
    ? SWITCH_COLORS.thumbOffDark
    : SWITCH_COLORS.thumbOffLight;

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={trackColor}
      thumbColor={thumbColor}
      ios_backgroundColor={trackColor.false}
      style={Platform.select({
        android: { transform: [{ scaleX: 1.05 }, { scaleY: 1.05 }] },
      })}
    />
  );
}
