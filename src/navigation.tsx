import Inicio from "./views/private/Inicio";
import Menu from "./views/private/Menu";
import AddUser from "./views/private/AddUser";
import ListaUser from "./views/private/ListaUser";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./views/public/Login";

export type RootStackParamsList ={
    Onboarding: NavigatorScreenParams<OnboardingStackParamsList>;
};

export type OnboardingStackParamsList ={
    Login: undefined;
    Inicio: undefined;
    Menu: undefined;
    AddUser: undefined;
    ListaUser: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamsList>();
const OnboardingStack = createNativeStackNavigator<OnboardingStackParamsList>();

const OnboardingNavigator = () => {
    return (
        <OnboardingStack.Navigator>
            <OnboardingStack.Screen name="Login" component={ Login } options={{title: "Inicio de sesión"}}/>
            <OnboardingStack.Screen name="Inicio" component={ Inicio } options={{title: "Inicio"}}/>
            <OnboardingStack.Screen name="Menu" component={ Menu } options={{title: "Menú"}}/>
            <OnboardingStack.Screen name="AddUser" component={ AddUser } options={{title: "Nuevo usuario"}}/>
            <OnboardingStack.Screen name="ListaUser" component={ ListaUser } options={{title: "Lista de usuarios"}}/>
        </OnboardingStack.Navigator>
    );
};

export const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Screen name="Onboarding" component={ OnboardingNavigator } />
        </RootStack.Navigator>
    );
};