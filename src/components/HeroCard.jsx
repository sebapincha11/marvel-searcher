import { useEffect, useState } from "react";
import { getHero } from "../helpers/getHeroes";
import { HeroItem } from "./HeroItem";


export const HeroCard = ({hero}) => {
    const [images, setImages] = useState([]);

    const getImages = async() =>{
        const newImages = await getHero(hero);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [])
    

  return (
    <>
        <h3>{hero}</h3>
        <div className="card-grid">
            {
                images.map((image) => (
                    <HeroItem 
                        key={image.id}
                        path = {image.path}
                        extension = {image.extension}
            
                    />
                ))
            }
        </div>
    </>
  )
}
