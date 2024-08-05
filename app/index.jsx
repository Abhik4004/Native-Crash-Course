import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import "expo-router/entry";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";

const StyledSafeAreaView = styled(SafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="h-full" backgroundColor="#240750">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[50px] mt-0"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[380px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 flex-1 justify-center items-center">
            <Text className="text-xl text-white font-bold text-center">
              Discover Endless Possibilities with
            </Text>
            <Text className="text-yellow-200 text-xl text-center">Aora</Text>
            <Text className="text-sm font-regular text-gray-100 text-center mt-5">
              Where Creativity meets innovation: embark on a journey of
              limitless exploration with Aora
            </Text>

            <CustomButton
              title="Continue with email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-[80%] mt-7"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#240750" style="light" />
    </SafeAreaView>
  );
}
