import { useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [searches, setSearch] = useState([]);

    const onAddGif = (newSearch) => {

        if(searches.includes(newSearch)) return;

        setSearch([...searches, newSearch])
    }


    return (

        <>

        <h1 className="text-5xl font-bold mb-5 text-center text-black">GIFs Generator</h1>

        <SearchInput
            onNewSearch={onAddGif}
            currentSearch = {searches}
        />

        <div id="container">
            {searches.map( search => (            
                <GifGrid 
                    key={search}
                    search={search}
                    />
                    ))
            }
        </div>
    

        </>

    )

}
