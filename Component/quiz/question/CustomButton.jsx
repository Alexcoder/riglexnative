import { View, Button } from "react-native";

const CustomButton = ({ isEditable, onPress, className, title }) => {
  return (
    <View>
      <Button
        // key={key}
        isEditable={isEditable}
        onPress={onPress}
        className={className}
        title={title}
      />
    </View>
  );
};

export default CustomButton;
