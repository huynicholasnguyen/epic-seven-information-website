import { useRef, useState } from "react";

export default function Input() {
    const inputRef = useRef(null);

    const [updated, setUpdated] = useState('');

    const handleClick = () => {
        setUpdated(inputRef.current.value);
    }
    return(
        <div className = 'mx-auto'>
            <div class = 'dropdown'>
                <button class = 'dropbtn'>
                    <a href = '#'>Test</a>
                    <a href = '#'>Test</a>
                    <a href = '#'>Test</a>
                </button>

            </div>
            <input 
                className = 'text-black'
                ref = {inputRef}
                type = "number"
                id = "message"
                name = "message"
            />
            <h2>{updated}</h2>
            
            <button onClick = {handleClick} className = 'bg-grey text-black mx-auto rounded'>Update</button>
        </div>
    )
}