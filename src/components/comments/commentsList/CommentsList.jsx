import React from "react";
import ModeContext from "../../context/mode/modeContext";
import Comment from "../comment/Comment";
import s from "./CommentsList.module.css";

class CommentsList extends React.Component{
    render() {
        return (
            <ModeContext.Consumer>
                {
                    (mode) => (
                            <div className={s.containerModal}>
                                {/* onClick={() => this.props.fn()} СРАБАТЫВАЕТ НА ВСЕХ УРОВНЯХ */}
                                <div className={s.modalWindow} style={{backgroundColor: mode === "night" ? "#03202f" : undefined}}>
                                    {/* onClick={(event) => event.stopImmediatePropagation()} НЕ ОСТАНАВЛИВАЕТ СОБЫТИЕ */}
                                    <div>    
                                        {this.props.comments.map((item, i) => 
                                            <Comment key={`CommentId-${i}`} comment={item} />
                                        )}
                                    </div>
                                    <img className={s.close} onClick={() => this.props.fn()} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Grey_close_x.svg/800px-Grey_close_x.svg.png" alt="close" />
                                </div>
                            </div>
                    )
                }
            </ModeContext.Consumer>
        )
    }
}

export default CommentsList;