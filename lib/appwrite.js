import { Client, Account, ID, Avatars, Databases } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.abhik.aora",
  projectId: "66b0efb500125f247e36",
  databaseId: "66b0f27f001045b7387f",
  userCollectionId: "66b0f2a20010363cb08c",
  videoCollectionId: "66b0f2ca002e411587d2",
  storageId: "66b0f3fe0021de8c8c5f",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

export const createUser = async ({ email, password, username }) => {
  try {
    // Log the parameters to ensure they are being passed correctly
    console.log("Creating user with:", { email, password, username });

    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw new Error("Account creation failed");
    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);
    const newUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.error("Error during user creation:", error.message || error);
    throw new Error("Failed to create user: " + (error.message || error));
  }
};

export async function signIn(email, password) {
  try {
    const session = await account.createEmailSession(email, password);
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
