const config = {
    appKey : String(import.meta.env.VITE_APPWRITE_Project_ID),
    appURL : String(import.meta.env.VITE_APPWRITE_URL),
    databaseID : String(import.meta.env.VITE_APPWRITE_DATBASE_ID),
    collectionID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    ImageBucketID : String(import.meta.env.VITE_APPWRITE_IMAGEBUCKET_ID),
}

export default config