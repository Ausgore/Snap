import { iComment } from "../typings/interfaces/Post";
import { USERS } from "./users";

export const COMMENTS: iComment[] = [
	{
		id: 0,
		author: USERS[0],
		content: "Comment",
		likes: 0,
	},
	{
		id: 1,
		author: USERS[1],
		content: "Comment 2",
		likes: 0,
	},
	{
		id: 2,
		author: USERS[2],
		content: "Comment 3",
		likes: 0
	},
	{
		id: 3,
		author: USERS[3],
		content: "Comment 4",
		likes: 0
	},
	{
		id: 4,
		author: USERS[4],
		content: "Comment 5",
		likes: 0
	},
	{
		id: 5,
		author: USERS[3],
		content: "Comment 6",
		likes: 1
	},
	{
		id: 6,
		author: USERS[3],
		content: "Comment 7",
		likes: 12
	},
	{
		id: 7,
		author: USERS[3],
		content: "Comment 8",
		likes: 4812098
	},
	{
		id: 8,
		author: USERS[3],
		content: "Comment 9",
		likes: 999
	},
	{
		id: 9,
		author: USERS[3],
		content: "Comment 10",
		likes: 500
	},
	{
		id: 10,
		author: USERS[3],
		content: "Comment 11",
		likes: 1200
	},
	{
		id: 11,
		author: USERS[3],
		content: "Comment 12",
		likes: 500
	},
	{
		id: 12,
		author: USERS[3],
		content: "Comment 13",
		likes: 500
	},
	{
		id: 13,
		author: USERS[3],
		content: "Comment 14",
		likes: 500
	},
	{
		id: 14,
		author: USERS[3],
		content: "Comment 15",
		likes: 500
	}
]