import {doc, deleteDoc} from "firebase/firestore"
import {db} from "../firebase/config"
import { useState } from "react"

export const useDeleteDocument = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const deleteDocument = async (docCollection, id) => {
        setLoading(true)
        setError(null)

       try {
         const docRef = doc(db, docCollection, id)
         await deleteDoc(docRef)

       } catch (error) {
        console.log(error.message)
        setError(error.message)
       } finally {
        setLoading(false)
       }
    }

    return {deleteDocument, error, loading}
}