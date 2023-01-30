import { useDispatch, useSelector } from "react-redux";
import { fetchDecodeData } from "./DecodeActions";
import { useEffect } from "react";

function ReduxModule() {
  const token = localStorage.getItem("access_token");

  const dispatch = useDispatch();

  const reduxToken = useSelector((state) => state.DecodeReducer);

  useEffect(() => {
    if (token) {
      console.log("header.js useEffect");
      dispatch(fetchDecodeData(token));
    } else {
      console.log("header.js not token");
    }
  }, []);

  return reduxToken;
}

export { ReduxModule };
