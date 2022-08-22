import reactLogo from '../img/react.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={reactLogo} alt="reactLogo" />
        <div>ReactFacts</div>
      </div>
      <div>
        <h2>React Course - Project 1</h2>
      </div>
    </nav>
  );
}

export default Navbar;
