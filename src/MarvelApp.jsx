import { useState } from 'react'
import { AddHeroe } from './components/AddHeroe';
import { HeroCard } from './components/HeroCard';


export const MarvelApp = () => {

    const [hero, setHero] = useState(['Iron Man', 'Spider Man']);

    const onAddHero = ( newHero) => {
        setHero( [newHero , ...hero]);
    }

  return (

    <>
    <h1>Marvel Searcher</h1>
    
    <AddHeroe 
        onNewHero = {event => onAddHero(event)}
    />

    <ol>
        { 
            hero.map((hero) => (
            <HeroCard 
                key={hero}
                hero= {hero}
            />
        ))
        }
    </ol>
    
    </>
  )
}
