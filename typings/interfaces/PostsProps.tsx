import { Dispatch, SetStateAction } from "react";
import { iPost } from "./Post";
export interface PostsProps {
	setCommentSection: Dispatch<SetStateAction<iPost | undefined>>;
	openCommentSection: () => void;
}