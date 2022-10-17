import styles from './styles.module.css';

const Barnavigation = () => {
  return (
    <>
      <div className={styles.topBar}>
        <a href="/">
          <img src="topo_ifpi.png" alt="Logo Ifpi" className={styles.topBarImage} />
        </a>
        {/* <nav className="top-bar_navigation">

        </nav> */}
      </div>
    </>
  );
};

export default Barnavigation;
