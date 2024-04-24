"use client";
import React, { useEffect } from "react";
import { fnc } from "@/game/main";

export default function Game() {
  useEffect(() => {require("@/game/main")},[]);
  return(
    <div id="root">
  
    </div>
  );
}
