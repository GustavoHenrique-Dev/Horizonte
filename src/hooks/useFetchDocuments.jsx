import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  orderBy,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      setLoading(true);

      const collectionRef = await collection(db, docCollection);
      let q;

      try {
        if (uid) {
          q = await query(collectionRef, where("uid", "==", uid), orderBy("createdAt", "desc"))
        } else {
           q = await query(collectionRef, orderBy("createdAt", "desc"));
        }

        await onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          );
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
        setError(error.message);
        setLoading(false);
      }
    }

    loadData();
  }, [docCollection, search, uid]);

  return { documents, loading, error };
};
