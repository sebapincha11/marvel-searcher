
export const HeroItem = ({path, extension}) => {

  return (
    <div className="card">
        <img src={`${path}.${extension}`}></img>
    </div>
  )
}
