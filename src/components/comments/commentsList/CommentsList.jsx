import React, { useContext } from "react";
import ModeContext from "../../context/mode/modeContext";
import Comment from "../comment/Comment";
import s from "./CommentsList.module.css";

function CommentsList(props) {
    const mode = useContext(ModeContext);

    return (
        <div className={s.containerModal}>
            {/* onClick={() => this.props.fn()} СРАБАТЫВАЕТ НА ВСЕХ УРОВНЯХ */}
            <div className={s.modalWindow} style={{backgroundColor: mode === "night" ? "#03202f" : undefined}}>
                {/* onClick={(event) => event.stopImmediatePropagation()} НЕ ОСТАНАВЛИВАЕТ СОБЫТИЕ */}
                <div>    
                    {props.comments.map((item, i) => 
                        <Comment key={`CommentId-${i}`} comment={item} />
                    )}
                </div>
                <img className={s.close} onClick={() => props.fn()} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/800px-Grey_close_x.svg.png" alt="close" />
            </div>
        </div>
    )
}

export default CommentsList;