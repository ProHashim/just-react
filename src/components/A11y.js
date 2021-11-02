import { Fragment } from "react/cjs/react.production.min";

const A11y = () => {
  return (
    <Fragment>
      <h2>A11y:</h2>
      <p>
        Short for accessability.
        <blockquote>
          <q>
            Web accessibility (also referred to as a11y) is the design and
            creation of websites that can be used by everyone. Accessibility
            support is necessary to allow assistive technology to interpret web
            pages. React fully supports building accessible websites, often by
            using standard HTML techniques.
          </q>
          <mark>~Reactjs.org</mark>
        </blockquote>
      </p>
      <h3>Ways for accessability improvements:</h3>
      <ul>
        <li>
          WCAG - <i>Web Content Accessability Guidlines</i>
        </li>
        <li>
          WAI - ARIA (
              <i>
              Web Accessibility Initiative - Accessible Rich Internet
          Applications 
              </i>
          )
        </li>
        <li>
            Semantic HTML - I am using <b>
                Fragment Tag 
            </b>
            to wrap out this accessability component
            For more on semantic HTML, please check out 
            <a href="https://reactjs.org/docs/accessibility.html#semantic-html">
                docs
            </a>
        </li>
        <li>
            Accessable Forms - label them pls 🤝
            <ul>
                <li>
                    Labeling
                </li>
                <li>
                    Notifying the user of errors
                </li>
            </ul>
        </li>
      </ul>
    </Fragment>
  );
};

export default A11y;
