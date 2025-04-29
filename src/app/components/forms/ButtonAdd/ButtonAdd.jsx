import React from "react";
// style
import style from "./style.module.css";
// Font
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function ButtonAdd({ text, icon, setShow }) {
  return (
    <button className={style.button_css} onClick={() => setShow(true)}>
      <div className={style.container_icon}>
        {icon}
      </div>
      <span className={`${style.text_button} ${poppins.className}`}>
        {text}
      </span>
    </button>
  );
}
