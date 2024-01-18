import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore'; // Updated import statements

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = ref(projectStorage, file.name);
    const imagesCollection = collection(projectFirestore, 'images'); // Use collection() method

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      try {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        const createdAt = timestamp();

        // Use addDoc() method to add a document to the collection
        const docRef = await addDoc(imagesCollection, { url: downloadURL, createdAt });
        
        setUrl(downloadURL);
      } catch (error) {
        setError(error);
      }
    });
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
