import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DMScreen() {
	return (
		<SafeAreaView className="flex-1 bg-black">
			<Text className="text-white"> Hello World </Text>
			<StatusBar style="light" />
		</SafeAreaView>
	)	
}