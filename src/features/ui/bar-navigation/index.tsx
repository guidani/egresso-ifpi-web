import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Barnavigation = () => {
  return (
    <>
      <div className={styles.topBar}>
        <Link to={'/'}>
          <img src="topo_ifpi.png" alt="Logo Ifpi" className={styles.topBarImage} />
        </Link>
        <nav>
          <Link to={'/login'}>
            Sair
          </Link>
        </nav>
        
      </div>
    </>
  );
};

export default Barnavigation;
