import "./Accordion.scss"
const Accordion = (props) => {
  const { title, subtitle, tags, id, name, isOpen, children } = props

  return (
    <div className="accordion">
      <details className="accordion__details" name={name} open={isOpen}>
        <summary className="accordion__summary">
          {tags && (
            <ul className="accordion__tag-list">
              {tags.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          )}
          <h3 className="accordion__title">
            <span role="term" aria-details={id}>
              {title}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="accordion__arrow"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </h3>
          {subtitle && <p>{subtitle}</p>}
        </summary>
      </details>
      <div className="accordion__content" id={id} role="defenition">
        <div className="accordion__content-inner">
          <div className="accordion__content-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Accordion
