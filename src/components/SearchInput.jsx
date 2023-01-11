import { useState } from "react";


export const SearchInput = ({onNewSearch}) => {

    const [value, setValue] = useState('');

    const onInputChange = (event) =>{
        setValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onNewSearch(value.trim())
        setValue('')
    }


    return (

    <form id="form"onSubmit={onSubmit}>

        <input 
            type="text"
            placeholder="Start typing.."
            value={value}
            onChange={onInputChange}
            className="w-full h-10 p-3 border border-black focus:outline-none" 
        />

    </form>



    )
}
