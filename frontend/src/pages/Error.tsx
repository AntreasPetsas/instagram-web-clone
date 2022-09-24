import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section id="error">
      <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link>
    </section>
  );
};
export default Error;

// Sorry, this page isn't available.
// The link you followed may be broken, or the page may have been removed. Go back to Instagram.