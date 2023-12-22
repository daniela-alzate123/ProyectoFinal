import { createUserWithEmailAndPassword, signInWithCustomToken, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfigure";
import { createUserInColletion, getUserFromColletion } from "../services/userServices";
import {  setIsLogout, setUserLogged, updateUser } from "./auth";


export const createUser = (newUser) => {
   return async () => {
    try {
        console.log('New User:', newUser);
        const {user} = await createUserWithEmailAndPassword(
            firebaseAuth,
            newUser.email,
            newUser.password
        );
        await updateProfile(firebaseAuth.currentUser, {
            displayName: newUser.name,
            photoURL: newUser.photoURL,
        });
        const createdUser = createUserInColletion(
            user.uid,
            newUser
        );
        dispatch(updateUser(createdUser));
    } catch (error) {
        console.log(error);
    }
   } 
}

export const loginWithEmailAndPassword = (loggedUser) => {
    return async (dispactch) =>{
        try{

            const {user} = await signInWithEmailAndPassword(
                firebaseAuth,
                loggedUser.email,
                loggedUser.password
    
            );
            const foundUser = await getUserFromColletion(user.uid);
            dispactch(setUserLogged(foundUser))
            dispactch(setIsLogout())
            dispatch(updateUser(foundUser)); 
            
        } catch (error){
           console.log(error)
        }
    }
}

export const signOff = () =>{
    return (dispatch) =>{
        dispatch(setIsLogout());
        dispatch(setUserLogged(null));
        dispatch(updateUser(null))
    }
}
