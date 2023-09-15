import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamsList } from "../navigation";

export default function useAppNavigation() {
  return useNavigation<NavigationProp<RootStackParamsList>>();
}