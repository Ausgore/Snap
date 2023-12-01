import { View } from "react-native";
import { POSTS } from "../../data/posts";
import { useEffect, useState } from "react";
import { iPost } from "../../typings/interfaces/Post";
import Post from "./Post";
import { PostsProps } from "../../typings/interfaces/PostsProps";

export default function Posts(props: PostsProps) {
	const [posts, setPosts] = useState<iPost[]>([]);
	useEffect(() => setPosts(POSTS), []);

	return (
		<View className="my-3 border-t border-[#171717]">
			{posts.map(post => <Post {...props} key={post.id} post={post} />)}
		</View>
	)
}