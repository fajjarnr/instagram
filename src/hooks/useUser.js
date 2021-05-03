import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
  const { user } = useContext(UserContext);
  const [activeUser, setActiveUser] = useState({});

  useEffect(() => {
    async function getUserByObjectId() {
      const response = getUserByUserId(user.uid);
      setActiveUser(response);
    }

    if (user?.uid) {
      getUserByObjectId();
    }
  }, [user]);

  return { user: activeUser };
}
