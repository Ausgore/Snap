import BottomSheet, { BottomSheetBackdrop, BottomSheetFlatList, BottomSheetBackdropProps, BottomSheetFooter, BottomSheetFooterProps } from "@gorhom/bottom-sheet";
import { View, Text, Image, Pressable, BackHandler, TextInput } from "react-native";
import { RefObject, useEffect, useState, forwardRef } from "react";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useIsFocused } from "@react-navigation/native";
import { USERS } from "../../data/users";
import { iPost } from "../../typings/interfaces/Post";
import numeral from "numeral";

interface CommentSectionProps {
	post: iPost;
}
const CommentSection = forwardRef((props: CommentSectionProps, ref) => {
	const [currentIndex, setCurrentIndex] = useState(-1);

	const isFocused = useIsFocused();
	useEffect(() => {
		if (isFocused) {
			const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
				if (!isFocused) return false;
				if (currentIndex == -1) return false;
				(ref as RefObject<BottomSheetMethods>).current?.close();
				return true;
			});
			return () => backHandler.remove();
		}
	}, [currentIndex, isFocused]);

	return (
		<BottomSheet
			ref={ref as RefObject<BottomSheetMethods>}
			onChange={i => setCurrentIndex(i)} snapPoints={["65%", "95%"]}
			index={-1}
			handleHeight={20}
			enablePanDownToClose
			backdropComponent={Backdrop}
			handleComponent={Header}
			keyboardBehavior="extend"
			footerComponent={p => <Footer {...p} post={props.post} />}
			backgroundStyle={{ backgroundColor: "#212121" }}
		>
			<View className="border-t border-t-[#2e2e2e] h-full pb-[80px]">
				<BottomSheetFlatList data={props.post.comments} keyExtractor={i => i.id.toString()} renderItem={({ item: comment }) => (
					<View className="flex flex-row justify-between items-start mt-3 mb-1 ml-2">
						<View className="flex flex-row w-3/4">
							{/* Profile Picture */}
							<Pressable>
								<View className="border w-10 h-10 p-[2px] border-red-500 border-transparent rounded-full">
									<Image source={{ uri: comment.author.avatar }} className="w-full h-full rounded-full" />
								</View>
							</Pressable>
							<View className="ml-2">
								<View className="flex flex-row items-center">
									{/* Username */}
									<Pressable>
										<Text className="text-white font-semibold text-xs mr-2">{comment.author.username}</Text>
									</Pressable>
									{/* Time sent */}
									<Text className="text-[#909090] font-semibold text-xs">2d</Text>
								</View>
								{/* Content */}
								<Text className="text-white font-light text-sm leading-4 mt-1 mb-2">{comment.content}</Text>
								{/* Reply button */}
								<Pressable>
									<Text className="text-xs text-[#909090] font-[500]">Reply</Text>
								</Pressable>
							</View>
						</View>
						{/* Likes */}
						<View className="flex ml-3 items-center w-1/4">
							<Pressable>
								<Image source={{ uri: "https://img.icons8.com/metro/52/838383/like.png" }} className="w-4 h-3 mb-1" />
							</Pressable>
							<Text className="text-[#838383] text-xs"> 
								{comment.likes < 100000 ? comment.likes : numeral(comment.likes).format("0.0a")}
							</Text>
						</View>
					</View>)}>
				</BottomSheetFlatList>
			</View>
		</BottomSheet>
	);
});
export default CommentSection;

const Header = () => {
	return (
		<View className="w-full rounded-t-[15px] py-3 items-center">
			<View className="w-[35px] h-[4px] rounded-[3px] bg-[#bbbbbb] self-center" />
			<Text className="mt-8 font-bold text-[#f4f4f4]"> Comments </Text>
		</View>
	)
}

interface FooterProps extends BottomSheetFooterProps {
	post: iPost;
}
const Footer = (props: FooterProps) => {
	const { author } = props.post;

	return (
		<BottomSheetFooter {...props}>
			<View className="flex flex-row items-center p-4 bg-[#212121]">
				<Image source={{ uri: USERS[0].avatar }} className="w-10 h-10 rounded-full" />
				<TextInput className="text-white mx-4 flex-1" placeholder={`Add a comment for ${author.username.substring(0, 10)}${author.username.length > 10 ? "..." : ""}`} placeholderTextColor="#8b8b8b" />
				<Pressable>
					<Text className="text-blue-500"> Post </Text>
				</Pressable>
			</View>
		</BottomSheetFooter>
	)
}
const Backdrop = (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} appearsOnIndex={0} />