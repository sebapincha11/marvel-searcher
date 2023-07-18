import { useEffect, useState } from "react";
import { getHero } from "../helpers/getHeroes";
import { HeroItem } from "./HeroItem";
import favorito from "../img/favorito.png"
import favorito_clicked from "../img/favorito_clicked.png"

export const HeroCard = ({hero}) => {
    const [images, setImages] = useState([]);
    const [currentImg, setCurrentImage] = useState(favorito);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        if (isClicked) {
          setCurrentImage(favorito);
          setIsClicked(false);
        } else {
          setCurrentImage(favorito_clicked);
          setIsClicked(true);
        }
      };

    const getImages = async() =>{
        const newImages = await getHero(hero);
        setImages(newImages);
    }

    useEffect( () => {
        getImages();
    }, [])
    

  return (
    <>
        <div className="title">
            <h3>{hero}</h3>
            <img id="fav" src= {currentImg} alt="" onClick={handleClick} />
        </div>
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
