import { iUser } from "../../typings/interfaces/User";
import { Animated, View, Text, Image, Pressable } from "react-native";
import { useState } from "react";

interface StoryProps {
	user: iUser;
}

export default function Story(props: StoryProps) {
	const [scale] = useState(new Animated.Value(1));
	const handlePressIn = () => Animated.timing(scale, { toValue: 0.9, duration: 120, useNativeDriver: true }).start();
	const handlePressOut = () => Animated.timing(scale, { toValue: 1, duration: 120, useNativeDriver: true }).start();

	return props.user && (
		<Pressable onPressIn={handlePressIn} onPressOut={handlePressOut}>
			<View className={`flex items-center ${props.user.isOwner ? "ml-4 mr-3" : "mx-2"}`}>
				<Animated.View className="relative" style={{ transform: [{ scale }]}}>
					<View className="border-2 w-20 h-20 p-1 border-red-500 rounded-full">
						<Image source={{ uri: props.user.avatar }} className="w-full h-full rounded-full" />
					</View>
					{props.user.isOwner && <Text className="absolute text-white bottom-0 right-0 z-10 bg-blue-500 w-[25px] h-[25px] rounded-full flex justify-between text-center border-2 text-[17px]"> + </Text>}
				</Animated.View>
				<Text className="text-white text-[11.3px] text-center mt-2"> {props.user.isOwner ? "Your story" : `${props.user.username.substring(0, 10)}${props.user.username.length > 10 ? "..." : ""}`} </Text>
			</View>
		</Pressable>
	)
}