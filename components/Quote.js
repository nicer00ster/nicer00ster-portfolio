import React from 'react';

class Quote extends React.Component {
  render() {
    return (
      <section class="main">
        <div class="mb-wrap mb-style-2">
          <blockquote cite="http://www.gutenberg.org/ebboks/11">
            <p>Measuring programming progress by lines of code is like measuring aircraft building progress by weight.</p>
          </blockquote>
        </div>

        <div class="mb-attribution">
          <p class="mb-author">
            Bill Gates
          </p>
          <cite>
            <a href="https://www.gatesnotes.com/">Bill Gates of Microsoft</a>
          </cite>
        </div>

      </section>
    )
  }
}

export default Quote;
