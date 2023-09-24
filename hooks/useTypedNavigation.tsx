import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation";

const useTypedNavigation = () => {
  const navigate = useNavigation<NavigationProp<RootStackParamList>>();

  return navigate;
};

export default useTypedNavigation;
