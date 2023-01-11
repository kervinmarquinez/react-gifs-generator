import { getGifs } from "../helpers/getGifs"
import { GridItem } from "./GridItem"
import { useEffect, useState } from "react"

export const GifGrid = ({search}) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(search);
    setImages(newImages)
  }

  useEffect(() => {
    getImages();
  }, [])

  return (

    <>

    <h3 className="text-2xl font-bold my-3">{search}</h3>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
    {images.map(img => (
      <GridItem 
        key={img.id}
        url={img.url}
      />
    ))}
    </div>

    
    </>
  )
}
