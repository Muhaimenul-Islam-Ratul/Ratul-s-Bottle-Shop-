import './banner.css'

const Banner = () => {
    return (
        <>
      {/* Header */}
      <header className="header">
        <div className="logo-section">
          <img src="https://i.ibb.co/xKLGGW6X/colorfull-logo.png" alt="Bottle Logo" className="logo" />
          <h1 className="shop-name">BottleShop</h1>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cart">
          <button className="cart-btn">Your Buyed Item 🛒 </button>
          
        </div>
      </header>

      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h2 className="banner-title">Discover Eco-Friendly Bottles</h2>
          <p className="banner-subtitle">Sustainable. Stylish. Reusable.</p>
          <a href="#shop" className="banner-button">Shop Now</a>
        </div>
        <div className="banner-image">
          <img src="https://i.ibb.co/W4YLkdJS/25-removebg-preview.png" alt="Featured Bottle" />
        </div>
      </section>
    </>
    );
};

export default Banner;