import React from "react";
import Button from "./Button";

const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="All"/>
            <Button name="Gaming"/>
            <Button name="Songs"/>
            <Button name="Live"/>
            <Button name="Sports"/>
            <Button name="Movies"/>
            <Button name="Football"/>
            <Button name="Cricket"/>
            <Button name="Programming"/>
        </div>
    )
}

export default ButtonList;