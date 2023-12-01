import { useState, Dispatch, SetStateAction } from "react";
import { Image, View, Pressable } from "react-native";
import { USERS } from "../../data/users";

export default function 	Footer() {
	const [activeTab, setActiveTab] = useState("Home");

	return (
		<View className="w-full py-2 flex flex-row items-center justify-around border-t border-t-[#171717]">
			<Tab tab="Home" activeTab={activeTab} setActiveTab={setActiveTab} baseUrl="fluency-systems-regular/48/ffffff/home--v1.png" activeUrl="fluency-systems-filled/48/ffffff/home--v1.png" />
			<Tab tab="Search" activeTab={activeTab} setActiveTab={setActiveTab} baseUrl="ios/100/ffffff/search--v1.png" activeUrl="ios-filled/50/ffffff/search--v1.png" />
			<Pressable>
				<View className="flex justify-center items-center border-2 w-6 h-6 border-white rounded-full">
					<View className="w-2 h-2 bg-red-500 rounded-full" />
				</View>
			</Pressable>
			<Tab tab="Reels" activeTab={activeTab} setActiveTab={setActiveTab} baseUrl="ios/ffffff/instagram-reel" activeUrl="ios-filled/ffffff/instagram-reel" />
			<Pressable onPress={() => setActiveTab("Profile")}>
				<View className={`w-[30px] h-[30px] rounded-full border-2 ${activeTab == "Profile" ? "border-white" : "border-transparent"}`}>
					<Image source={{ uri: USERS[0].avatar }} className=" w-full h-full rounded-full " />
				</View>
			</Pressable>
		</View>
	)
}

interface TabProps {
	tab: string;
	activeTab: string;
	setActiveTab: Dispatch<SetStateAction<string>>;
	baseUrl: string;
	activeUrl: string;
}
function Tab(props: TabProps) {
	return (
		<Pressable onPress={() => props.setActiveTab(props.tab)}>
			<Image source={{ uri: `https://img.icons8.com/${props.baseUrl}`}} className={`w-7 h-7 ${props.activeTab == props.tab ? "hidden" : ""}`} />
			<Image source={{ uri: `https://img.icons8.com/${props.activeUrl}`}} className={`w-7 h-7 ${props.activeTab != props.tab ? "hidden" : ""}`} />
		</Pressable>
	)
}