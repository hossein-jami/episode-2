import Axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { FetchApi } from "./FetchApi";
import { FactReducer, initialState } from "./FactReducer";
import { type } from "@testing-library/user-event/dist/type";

export const Fetchdata = () => {
  const [catfact, setCatfact] = useState("");

  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(FactReducer, initialState);

  useEffect(() => {
    fetchfact();
  }, []);

  const fetchfact = () => {
    dispatch({ type: "fetch_start" });
    
    Axios.get("https://catfact.ninja/fact")
      .then((res) => {
        dispatch({ type: "fetch_success", data: res.data.fact });
        console.log(res.data);
        setCatfact(res.data.fact);
      })
      .catch((error) => {
        dispatch({ type: "fetch_error" });
      });
  };

  return (
    <div>
      <button onClick={fetchfact}>
        {state.loading ? "loading " : "fetch data"}
      </button>
      {state.error && (<p>error</p>)}
      <p>{state.fact}</p>
      <p>{catfact}</p>
      <br></br>
      <FetchApi />
    </div>
  );
};

// 11 : 00
