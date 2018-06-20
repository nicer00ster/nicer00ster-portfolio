import Link from 'next/link';
import { connect } from 'react-redux';

const Card = ({ imageUrl, imageAlt, title, desc, buttonText, tags, href }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <div className="card__content">
        <div className="card__content--title">
          {title}
        </div>
        <div className="card__content--text">
          {desc}
        </div>
        <div className="card__content--tags">
          {tags}
        </div>
        <a target="_blank" href={href} className="card__content--button">
          <p className="card__content--button-text">
            {buttonText}
          </p>
        </a>
      </div>
    </div>
  )
}

export default connect()(Card);
