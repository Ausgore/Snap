import { iUser } from "./User";

export interface iPost {
	id: number;
	images: string[];
	author: iUser;
	likes: number;
	caption?: string;
	comments: iComment[];
	createdAt: Date;
}

export interface iComment {
	id: number;
	author: iUser;
	content: string;
	likes: number;
}