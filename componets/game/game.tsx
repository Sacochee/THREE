"use client";
import React, { useEffect } from "react";


export default function Game() {
  useEffect(() => {require("@/game/main")},[]);
  return(
    <div id="root"></div>
  );
}
