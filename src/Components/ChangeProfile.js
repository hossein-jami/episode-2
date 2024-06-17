import { useContext, useState } from "react";
import { ProfileContext } from "../App";

export const ChangeProfile = (props) => {
  const { setUserName } = useContext(ProfileContext);
  const [newUserName, setNewUserName] = useState("");

  return (
    <div>
      <input onChange={(event) => setNewUserName(event.target.value)}></input>
      <button
        onClick={() => {
          setUserName(newUserName);
        }}
      >
        change profile
      </button>
    </div>
  );
};
