import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { db } from "../firebase/config";

export const useAuth = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const createUser = async (data) => {
    setLoading(true);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await updateProfile(user, { displayName: data.name });

      return user;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    signOut(auth)
  }

  return { auth, createUser, error, loading, logOut };
};
