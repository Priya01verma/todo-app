import React from "react";

const ToDo = (props) => {
    const {
        todo: { content },
    } = props;
    return <li>{content}</li>;
}
export default ToDo;