


const Header = () => {
  return (
    <header className="video-header">
      <video autoPlay muted loop>
        <source src="assets/opener2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default Header;
