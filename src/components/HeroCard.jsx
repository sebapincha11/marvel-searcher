import { getHero } from "../helpers/getHeroes";


export const HeroCard = ({hero}) => {

    getHero(hero);

  return (
    <>
        <h3>{hero}</h3>
        <p>Hola Mundo</p>
    </>
  )
}
