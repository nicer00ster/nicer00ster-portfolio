import React from 'react';

const Quote = ({ url, quote, author, relation }) => (
      <section class="main">
        <div class="mb-wrap mb-style-2">
          <blockquote cite={url}>
            <p>{quote}</p>
          </blockquote>
        </div>

        <div class="mb-attribution">
          <p class="mb-author">
            {author}
          </p>
          <cite>
            <a href={url}>{relation}</a>
          </cite>
        </div>
      </section>
)

export default Quote;
