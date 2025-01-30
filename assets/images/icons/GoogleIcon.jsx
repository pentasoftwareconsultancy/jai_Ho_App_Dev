import React from 'react';
import { Svg, Defs, LinearGradient, Stop, Text } from 'react-native-svg';

const GoogleIcon = ({ size = 30 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 20">
      <Defs>
        <LinearGradient id="googleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#FFC107" />
          <Stop offset="25%" stopColor="#FF3D00" />
          <Stop offset="50%" stopColor="#4CAF50" />
          <Stop offset="75%" stopColor="#1976D2" />
        </LinearGradient>
      </Defs>
      <Text
        x="50%"
        y="50%"
        fontSize={size}
        fontWeight="bold"
        textAnchor="middle"
        alignmentBaseline="middle"
        fill="url(#googleGradient)"
      >
        G
      </Text>
    </Svg>
  );
};

export default GoogleIcon;