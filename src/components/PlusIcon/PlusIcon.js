import { View, Text } from 'react-native';
import React from 'react';
import { Svg, Path } from 'react-native-svg';

const PlusIcon = () => {
  return (
    <View>
      <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
          stroke="#FFD615"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12 8V16"
          stroke="#FFD615"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M8 12H16"
          stroke="#FFD615"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
					
        />
      </Svg>
    </View>
  );
};

export default PlusIcon;
