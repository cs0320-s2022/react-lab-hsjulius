import React,  {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import { setSourceMapRange } from 'typescript';
import './Horoscope';

type TextBoxProps = {value: string, setter: (arg: string) => void}

function TextBox(props: TextBoxProps) {

    function handleChange(event: any) {
        props.setter(event.target.value);
        console.log("change made")
    }

    return (
        <div>
            <label>
            {props.value}
            </label>
            <input type="text" onChange={handleChange}/>
        </div>
    )
}

export default TextBox