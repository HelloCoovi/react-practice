import { useState } from "react";

import FetchAPI from "./apiCallMethod/FetchAPI.jsx";

const COMPONENT_MAP = {
  "fetch API": FetchAPI,
  // 다른 컴포넌트들도 이와 유사하게 매핑
};

export default function ApiCallSection({ selectExample }) {
  const SelectedComponent = COMPONENT_MAP[selectExample] || null;

  return SelectedComponent ? <SelectedComponent /> : <div>컴포넌트를 선택하세요</div>;
}
