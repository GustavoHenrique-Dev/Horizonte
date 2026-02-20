import { useReducer } from "react";
import { db } from "../firebase/config"
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
    loading: false,
    error: null
}

const reducer = (state, action) => {
    switch (action.type){
        case "LOADING":
            return{
                loading: true,
                error: null
            }

        case "SUCESS":
            return{
                loading: false,
                error: null
            }

        case "ERROR":
            return{
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }
}

export const useInsertDocument = (docCollection) => {

    const [response, dispatch] = useReducer(reducer, initialState)

    const insertDocument = async (document) => {

        dispatch({type: "LOADING"})

        try {
            
            const newDocument = {...document, createdAt: Timestamp.now()}
            const insertedElement = await addDoc(collection(db, docCollection), newDocument)
            dispatch({type: "SUCESS", payload: insertedElement})


        } catch (error) {
            console.log(error)
            dispatch({type: "ERROR", payload: error.message})
        }

    }

    return{insertDocument, response}
}