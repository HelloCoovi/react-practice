import { useState } from "react";

import FetchAPI from "./apiCallMethod/FetchAPI.jsx";
import Axios from "./apiCallMethod/Axios.jsx";
import CustomHook from "./apiCallMethod/customHook.jsx";
import SWR from "./apiCallMethod/SWR.jsx";

const COMPONENT_MAP = {
  "fetch API": FetchAPI,
  axios: Axios,
  "custom Hook": CustomHook,
  SWR: SWR,
};

export default function ApiCallSection({ selectExample }) {
  const SelectedComponent = COMPONENT_MAP[selectExample] || null;

  return SelectedComponent ? <SelectedComponent /> : <div>컴포넌트를 선택하세요</div>;
}
