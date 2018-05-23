import Link from 'next/link';

const Card = () => {
  return (
    <div className="card">
      <div className="card__image">

      </div>
      <div className="card__content">
        <div className="card__content--title">
          title
        </div>
        <div className="card__content--text">
          description
        </div>
        <button className="card__content--button">
          <p className="card__content--button-text">
            View source code
          </p>
        </button>
      </div>
    </div>
  )
}

export default Card;
