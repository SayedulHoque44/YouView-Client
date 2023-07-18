import { signOut } from "firebase/auth";
import useYVContext from "./useYVContext";

const useYVBtnFn = () => {
  const { user, auth } = useYVContext();

  //
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        const currentUser = res.user;
        console.log(currentUser);
      })
      .catch((err) => console.log(err.message));
  };
  return { handleSignOut };
};

export default useYVBtnFn;
