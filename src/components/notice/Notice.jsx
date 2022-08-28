import React from 'react';
import ModeContext from '../context/mode/modeContext';
import style from "./Notice.module.css";

export default function Notice() {
  return (
    <ModeContext.Consumer>
      {
        (mode) => (
                    <div className={style.container} style={{backgroundColor: mode === "night" ? "lightGrey" : undefined}}>
                      <div className={`${style.notice} ${mode === "night" ? style.nightMode : style.lightMode}`}>SELECT USER</div>
                    </div>
        )
      }
    </ModeContext.Consumer>
  )
}