import { Client, Account, ID } from "react-native-appwrite";

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

export const createUser = () => {
  account.create(ID.unique(), "me@example.com", "abhik2004_4", "jane doe").then(
    function (res) {
      console.log(res);
    },
    function (err) {
      console.log(err);
    }
  );
};
