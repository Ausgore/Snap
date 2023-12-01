import commaNumber from "comma-number";
import { iPost } from "../../typings/interfaces/Post";
import { useState, useRef } from "react";
import { View, Image, Text, FlatList, Dimensions, Pressable } from "react-native";
import moment from "moment";
import { PostsProps } from "../../typings/interfaces/PostsProps";

interface PostProps extends PostsProps {
	post: iPost;
}

export default function Post(props: PostProps) {
	const [isIndicatorVisible, setIsIndicatorVisible] = useState(true);
	const [currentPage, setCurrentPage] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const handleScroll = (e: any) => {
		setCurrentPage(e.changed[0].index);
		setIsIndicatorVisible(true);
		if (timerRef.current) clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => setIsIndicatorVisible(false), 3000);
	}

	const openCommentSection = () => {
		props.setCommentSection(props.post);
		props.openCommentSection();
	}

	const handlePostScrollRef = useRef(handleScroll);
	let date = new Date().getTime() - props.post.createdAt.getTime() > 6.04e+8 ? props.post.createdAt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: props.post.createdAt.getFullYear() != new Date().getFullYear() ? "numeric" : undefined }) : moment(props.post.createdAt.toISOString()).fromNow();
	date = date.slice(0, 1).toUpperCase() + date.slice(1, date.length);

	return (
		<View key={props.post.id} className="mb-3">
			{/* Header */}
			<View className="py-3 flex flex-row justify-between mx-3 items-center">
				<View className="flex flex-row items-center">
					<Image source={{ uri: props.post.author.avatar }} className="w-7 h-7 rounded-full mr-2" />
					<Text className="text-white font-semibold"> {props.post.author.username} </Text>
				</View>
				<Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/ffffff/menu-2.png" }} className="w-[17px] h-[17px]" />
			</View>
			{/* Image */}
			<View className="relative">
				<FlatList
					nestedScrollEnabled={true}
					onViewableItemsChanged={handlePostScrollRef.current}
					showsHorizontalScrollIndicator={false}
					data={props.post.images}
					keyExtractor={item => item.toString()}
					horizontal
					pagingEnabled
					viewabilityConfig={{ itemVisiblePercentThreshold: 100 }}
					scrollEnabled={props.post.images.length != 1}
					renderItem={({ item: image }) =>
						<View style={{ width: Dimensions.get("window").width, height: 450 }}>
							<Image source={{ uri: image }} className="flex-1" style={{ resizeMode: "cover" }} />
						</View>}
				/>
				{isIndicatorVisible && props.post.images.length > 1 && <Text className="absolute text-white top-4 bg-[#000000b8] rounded-xl p-1 px-[6px] text-xs right-3"> {currentPage + 1}/{props.post.images.length} </Text>}
			</View>
			{/* Footer */}
			<View className="pt-1 mx-3">
				<View className="flex flex-row justify-between">
					<View className="flex flex-row items-center relativer">
						<Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png" }} className="w-7 h-7 mr-3 mt-1" />
						<Pressable onPress={openCommentSection}>
							<Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/filled-chat.png" }} className="w-7 h-7 mr-4 mt-1" />
						</Pressable>
						<Image source={{ uri: "https://img.icons8.com/fluency-systems-regular/48/ffffff/sent--v1.png" }} className="w-6 h-6 rotate-[320deg] mr-10" />
					</View>
					{props.post.images.length > 1 && <View className="absolute flex flex-row items-center left-1/2 transform -translate-x-1/2 mt-4">
						{props.post.images.map((_, i) => <View key={i} className={`${i == currentPage ? "bg-blue-500" : "bg-[#cdcdcd]"} ${i == currentPage ? "w-[6px] h-[6px]" : "w-[5px] h-[5px]"} mr-1 rounded-full`} />)}
					</View>}
					<Image source={{ uri: "https://img.icons8.com/windows/32/ffffff/bookmark-ribbon--v1.png" }} className="mt-1 w-7 h-7" />
				</View>
				{props.post.likes && <Text className="font-semibold text-white mt-2">{commaNumber(props.post.likes)} likes</Text>}
				{props.post.caption && <Text className="text-white">
					<Text className="font-semibold">{props.post.author.username}</Text>
					<Text> {props.post.caption} </Text>
				</Text>}
				{/* If there are comments */}
				{props.post.comments.length > 0 && <>
					<Pressable onPress={openCommentSection}>
						<Text className="text-[#a5a5a5] py-[2px]">View{props.post.comments.length > 1 && " all"} {commaNumber(props.post.comments.length)} comment{props.post.comments.length > 1 && "s"} </Text>
					</Pressable>
				</>}
				{/* If there's less than 3 comments */}
				{props.post.comments.length < 3 && props.post.comments.map(c => <Text key={c.id} className="text-white">
					<Text className="font-semibold">{c.author.username}</Text>
					<Text> {c.content} </Text>
				</Text>)}
				<Text className="text-[#a5a5a5] text-xs mt-1">{date}</Text>
			</View>
		</View>
	)
}