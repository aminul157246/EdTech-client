import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Google = () => {

    const {signInWithGoogle} = useContext(AuthContext)


    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user);
            toast.success("Good job!", "Sign in with Google done!", "success");
        })
        .catch(err => {
            console.log(err.message);
        })
    }


    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn">Google log in </button>
        </div>
    );
};

export default Google;