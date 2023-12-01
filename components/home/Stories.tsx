import { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { USERS } from "../../data/users";
import { iUser } from "../../typings/interfaces/User";
import Story from "./Story";

export default function Stories() {
	const [users, setUsers] = useState<iUser[]>([]);
	useEffect(() => setUsers(USERS), []);

	return (
		<ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>
			<View className="pt-3 flex flex-row">
				<Story user={users.filter(u => u.isOwner)[0]} />
				{users.filter(u => !u.isOwner).map((user) => <Story user={user} key={user.id} />)}
			</View>
		</ScrollView>
	)
}