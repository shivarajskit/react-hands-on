import { useState } from "react";
import Child from "./Child";
import "./theme-app.css";

function ThemeApp() {
  const [childData, setChildData] = useState("");

  const handleChildData = (colorFromChild: string) => {
    setChildData(colorFromChild);
  };

  return (
    <div>
      <div className="box" style={{ background: childData || 'black' }}></div>
      <Child onSendData={handleChildData} />
    </div>
  );
}

export default ThemeApp;