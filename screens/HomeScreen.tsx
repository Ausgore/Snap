import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Posts from "../components/home/Posts";
import { Animated } from "react-native";
import Footer from "../components/home/Footer";
import { HomeScreenProps } from "../typings/interfaces/HomeScreenProps";
import CommentSection from "../components/home/CommentSection";
import { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { iPost } from "../typings/interfaces/Post";

export default function HomeScreen(props: HomeScreenProps) {
	const [commentSection, setCommentSection] = useState<iPost>();
	const commentSectionRef = useRef<BottomSheet>();
	const openCommentSection = () => commentSectionRef.current?.snapToIndex(0);

	return (
		<SafeAreaView className="flex-1 bg-black">
			<Header {...props} />
			<Animated.ScrollView showsVerticalScrollIndicator={false}>
				<Stories />
				<Posts {...props} setCommentSection={setCommentSection} openCommentSection={openCommentSection} />
			</Animated.ScrollView>
			<Footer />
			{commentSection && <CommentSection post={commentSection} ref={commentSectionRef} />}
			<StatusBar style="light" />
		</SafeAreaView>
	)
}