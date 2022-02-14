// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="sub">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
