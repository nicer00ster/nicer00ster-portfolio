import React from 'react';

const Quote = ({ url, quote, author, relation }) => (
      <section className="quote__wrapper">
        <div className="quote__wrapper--section">
          <blockquote cite={url}>
            <p>{quote}</p>
          </blockquote>
        </div>

        <div className="quote__wrapper--cite">
          <p className="quote__wrapper--cite_author">
            {author}
          </p>
          <cite>
            <a href={url}>{relation}</a>
          </cite>
        </div>
      </section>
)

export default Quote;
