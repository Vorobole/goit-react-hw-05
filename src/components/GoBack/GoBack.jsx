import { Link } from 'react-router-dom';
import css from './GoBack.module.css';

function GoBack({ to, children }) {
  return (
    <Link className={css.backBtn} to={to}>
      {children}
    </Link>
  );
}

export default GoBack;
