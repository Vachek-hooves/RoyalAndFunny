import {Text, TouchableOpacity} from 'react-native';
const Level = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default Level;

