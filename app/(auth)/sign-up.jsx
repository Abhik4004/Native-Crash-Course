import { ScrollView, StyleSheet, Text, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    console.log("Form values before submission:", form); // Add this log

    if (form.username === "" || form.password === "" || form.email === "") {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setIsSubmitting(true);

    try {
      const result = await createUser({
        email: form.email,
        password: form.password,
        username: form.username,
      });
      console.log("User creation result:", result); // Add this log
      router.replace("/home");
    } catch (error) {
      console.error("Error during user creation:", error); // Add this log
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView backgroundColor="#240750" height="100%">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-white text-2xl text-semibold mt-10 font-semibold">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
          />

          <CustomButton title="Register" handlePress={submit} />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-green-100 font-extralight">
              Already have an account
            </Text>
            <Link
              href="/sign-in"
              className="text-sm font-semibold text-yellow-600"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
