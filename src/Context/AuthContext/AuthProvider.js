import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(false);

    // SignIn With GOOGLE
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(false);
        return signInWithPopup(auth, googleProvider);
    }


    // Sign Up With Email & Password
    const signUpWithEmailPassword = (gmail, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, gmail, password);
    }


    // Update User Profile
    const updateUserProfile = (profile) => {
        setLoading(false);
        return updateProfile(auth.currentUser, profile);
    }


    // Login User With Gmail & Password
    const loginUser = (gmail, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, gmail, password);
    }


    // Log Out Current User
    const logOutUser = () => {
        setLoading(false);
        return signOut(auth);
    }


    // Get Logged User
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            if (user === null) {
                setUser(loggedUser);
                setLoading(false);
            }
        });
        return () => unSubscribe();
    }, []);


    const authInfo = {
        signInWithGoogle,
        signUpWithEmailPassword,
        updateUserProfile,
        loginUser,
        logOutUser,
        user,
        loading,
        theme,
        setTheme
    }

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;