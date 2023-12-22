import { doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../firebase/firebaseConfigure";

const collection = 'usuarios'

export const createUserInColletion = async (uid, newUser) =>{
    try{

        const newUserRef = doc(firebaseDB, collection,uid)
        await setDoc(newUserRef, newUser);
        return {
            ok: true,
            user: {
                id: uid,
                ...newUser
            }
        }
    }catch(error){
        console.log(error)
        return false;
    }
}



export const getUserFromColletion = async(uid) =>{
    try{

        const useRef = doc(firebaseDB, collection, uid)
        const user = await getDoc(useRef);
       if (user.exists()){
            return {
                id: user.id,
                ...user.data(),
            };
        }else{
            return null;
        }
    }catch(error){
        console.log(error)
        return null
    }
}