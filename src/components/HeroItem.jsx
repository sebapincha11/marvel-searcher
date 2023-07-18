
export const HeroItem = ({path, extension}) => {
  var url = `${path}.${extension}`
  return (
    <div className="card">
        <img src={url} alt="imageHero"></img>
    </div>
  )
}
