
import Tooltipshow from "./Tooltippage/Tooltip";
import Postions from "./Tooltippage/Tooltip postions/Tooltip.postions";
import { useState } from "react";

function App() {
  const [position,setPostion]=useState("top");

  function setTooltipPostion(postion){
    setPostion(postion);
  }


  return (
    <>    <Postions setTooltipPostion={setTooltipPostion}/>
<Tooltipshow postion={position}/>
</>

  )
    
}

export default App;
