<Typing cursor={<Cursor />} className="hypertext__cursor" speed={55} >
  <Typing.Delay ms={500} />
  <ul>
    <li>
      <span className="hypertext__span">
        <span className="hypertext__content"> $ >></span>{' '}
        JavaScript: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;]
      </span>
    </li>
    <Typing.Delay ms={2000} />
    <li>
      <span className="hypertext__span">
        <span className="hypertext__cursor"> $ >></span>{' '}
        React: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 80%
      </span>
    </li>
    <Typing.Delay ms={1000} />
    <li>
      <span className="hypertext__span">
        <span className="hypertext__cursor"> $ >></span>{' '}
        Sketch: [&#9632;&#9632;&#9632;&#9632;&#9632;&#9633;&#9633;] 65%
      </span>
    </li>
    <Typing.Delay ms={1000} />
    <li>
      <span className="hypertext__span">
        <span className="hypertext__cursor"> $ >></span>{' '}

        <Typing.Backspace count={10} delay={750} />
      </span>
    </li>
    <Typing.Delay ms={1000} />
    <li>
      <span className="hypertext__cursor"> $ >></span> Neither
      could deleting a line of text.
      <Typing.Reset count={1} delay={750} />
      <span> Or the entire tree.</span>
      <Typing.Reset delay={2000} />
    </li>
    </ul>
  </Typing>
