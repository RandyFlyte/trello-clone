import { ID, storage } from "@/appwrite"

const uploadImage = async (file: File) => {
  if (!file) return;
  
  const fileUploaded = await storage.createFile(
    '64ed24d61735c835d991',
    ID.unique(),
    file
  );

  return fileUploaded;
}

export default uploadImage;