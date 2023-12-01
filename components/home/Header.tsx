import { View, Image, Text, Pressable } from "react-native";
import { HomeScreenProps } from "../../typings/interfaces/HomeScreenProps";

export default function Header(props: HomeScreenProps) {
	return (
		<View className="px-5 py-3 flex justify-between flex-row items-center">
			<Pressable>
				<Image className="w-[55px] h-[30px]" style={{ resizeMode: "contain" }} source={require("../../assets/header-logo.png")} />
			</Pressable>
			<View className="flex flex-row items-center">
				<Pressable>
					<Image className="w-7 h-7" style={{ resizeMode: "contain" }} source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png" }} />
				</Pressable>
				<Pressable className="relative" onPress={() => props.navigation.navigate("DMScreen") }>
					<Text className="absolute text-white left-[50%] ml-2 text-sm min-w-[20px] bottom-4 w-fit rounded-full bg-red-600 z-50 text-center"> 1K+ </Text>
					<Image className="w-7 h-7 ml-4" style={{ resizeMode: "contain" }} source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png" }} />
				</Pressable>
			</View>
		</View>
	);
}