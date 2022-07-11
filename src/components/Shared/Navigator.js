import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/this-page-is-not-found">Not Found</Link></li>
      </ul>
    </div>
  )
}

export default Navigator;