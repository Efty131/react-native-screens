import auth from "@react-native-firebase/auth";

export const registerUser = async (email, password) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        await userCredential.user.sendEmailVerification();
        return userCredential.user;
    } catch (error) {
        let errMessage;
        switch (error.code) {
            case 'auth/email-already-in-use':
                errMessage = "This email is already in use. Use a different email address.";
                break;
                case 'auth/invalid-email':
                    errMessage = "Invalid email address";
                    break;
                    case 'auth/weak-password':
                        errMessage = "Password is too weak. Use at least 6 characters.";
                        break;
        
            default:
                errMessage = "An unknown error occured";
                break;
        };
        throw new Error(errMessage);
    }
};

// for login only authentic user
export const loginUser = async (email, password) => {
    try {
        const  userCredential = await auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        return {user, emailVerified: user.emailVerified};
    } catch (error) {
        let errMessage;
        switch (error.code) {
            case 'auth/wrong-password':
                errMessage = 'Incorrect Password';
                break;
                case 'auth/user-not-found':
                errMessage = 'No User Found';
                break;
            default:
               errMessage = 'An Unknown error occured';
        };
        throw new Error(errMessage);
    }
};