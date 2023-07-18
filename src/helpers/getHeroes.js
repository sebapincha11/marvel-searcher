export const getHero = async(hero) =>{
    const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9c0ca35a97ea1851e87a40960f0161bc&hash=88f5cd070cc9490e40ae3ceb77169520&name=${hero}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    

    const heroes = data.results.map(results=>({
        id: results.id,
        path: results.thumbnail.path,
        extension: results.thumbnail.extension
    }))
    return heroes;
}