"use client";
import React, { useEffect, useState } from "react";
import Question from "./Question";

export default function Game() {
  const [question, setQuestion] = useState(false)



  useEffect(() => {require("@/game/main")},[]);
  return(
    <div id="root">
      
    </div>
  );
}
