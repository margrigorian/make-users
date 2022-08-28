import React from 'react';
import ModeContext from '../context/mode/modeContext';
import style from "./HomePage.module.css";

export default function WELCOME() {
  return (
    <ModeContext.Consumer>
      {
        (mode) => (
                    <div className={style.container} style={{backgroundColor: mode === "night" ? "lightGrey" : undefined}}>
                      <div className={style.welcome} style={{color: mode === "night" ? "#420c0c" : undefined}}>WELCOME</div>
                    </div>
        )
      }
    </ModeContext.Consumer>
  )
}
