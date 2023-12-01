import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DMScreen from "./screens/DMScreen";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { HomeTabScreenList } from "./typings/types/HomeTabScreenList";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomeTab = createMaterialTopTabNavigator<HomeTabScreenList>();
const Stack = createNativeStackNavigator();

function HomeNavigator() {
	return (
		<HomeTab.Navigator initialRouteName="HomeScreen" screenOptions={{ tabBarStyle: { height: 0 } }}>
			<HomeTab.Screen name="HomeScreen" children={(props: any) => <HomeScreen {...props} />} />
			<HomeTab.Screen name="DMScreen" component={DMScreen} />
		</HomeTab.Navigator>
	)
}

export default function App() {
	return (
		<GestureHandlerRootView className="flex-1">
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Home" component={HomeNavigator} />
				</Stack.Navigator>
			</NavigationContainer>
		</GestureHandlerRootView>
	);
}