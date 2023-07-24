import c from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={c.wrapper}>
      <h1 className={c.title}>
        Your Contacts{' '}
        <span role="img" aria-label="Telephone icon">
          ☎️
        </span>
      </h1>
      <p>Please Register or Login</p>
    </div>
  );
};

export default HomePage;
