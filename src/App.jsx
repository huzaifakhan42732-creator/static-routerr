// // ✅ Static React Router Assignment
// // All routes and pages are manually defined — no dynamic data or API used.

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// // 🏠 Home Page Component
// function Home() {
//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h1>🏠 Home Page</h1>
//       <p>Welcome to our static React Router website.</p>
//     </div>
//   );
// }

// // ℹ️ About Page Component
// function About() {
//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h1>ℹ️ About Us</h1>
//       <p>This project is made for our React Router assignment.</p>
//     </div>
//   );
// }

// // 🛠️ Services Page Component
// function Services() {
//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h1>🛠️ Our Services</h1>
//       <p>We provide web design, development, and React learning support.</p>
//     </div>
//   );
// }

// // 📞 Contact Page Component
// function Contact() {
//   return (
//     <div style={{ textAlign: "center", padding: "50px" }}>
//       <h1>📞 Contact Us</h1>
//       <p>Email: example@gmail.com</p>
//       <p>Phone: +92 300 0000000</p>
//     </div>
//   );
// }

// // 🌐 Main App Component
// function App() {
//   // Inline simple styling for navbar
//   const navStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     backgroundColor: "#2a5298",
//     padding: "15px",
//   };

//   const linkStyle = {
//     color: "white",
//     textDecoration: "none",
//     fontSize: "18px",
//     fontWeight: "500",
//   };

//   return (
//     <Router>
//       {/* 🔹 Static Navigation Links */}
//       <nav style={navStyle}>
//         <Link to="/" style={linkStyle}>Home</Link>
//         <Link to="/about" style={linkStyle}>About</Link>
//         <Link to="/services" style={linkStyle}>Services</Link>
//         <Link to="/contact" style={linkStyle}>Contact</Link>
//       </nav>

//       {/* 🔹 Static Routes — fixed paths and components */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>

//       {/* 🔹 Simple Footer */}
//       <footer style={{ textAlign: "center", marginTop: "40px", padding: "20px", backgroundColor: "#eee" }}>
//         <p>© 2025 React Static Router Assignment — All Rights Reserved</p>
//       </footer>
//     </Router>
//   );
// }

// export default App;

// ✅ Static React Router Assignment (Full Page Layout)
// All routes and pages are static — no dynamic data or API used.

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Shared full-page style
const pageStyle = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(135deg, #899cbfff, #1e3c72)",
  color: "white",
  fontFamily: "Poppins, sans-serif",
};

// 🏠 Home Page
function Home() {
  return (
    <div style={pageStyle}>
      <h1>🏠 Home Page</h1>
      <p>Welcome to our static React Router website.</p>
    </div>
  );
}

// ℹ️ About Page
function About() {
  return (
    <div style={pageStyle}>
      <h1>ℹ️ About Us</h1>
      <p>This is a static routing project made for our React assignment.</p>
    </div>
  );
}

// 🛠️ Services Page
function Services() {
  return (
    <div style={pageStyle}>
      <h1>🛠️ Our Services</h1>
      <p>We provide web design, development, and React learning support.</p>
    </div>
  );
}

// 📞 Contact Page
function Contact() {
  return (
    <div style={pageStyle}>
      <h1>📞 Contact Us</h1>
      <p>Email: example@gmail.com</p>
      <p>Phone: +92 300 0000000</p>
    </div>
  );
}

// 🌐 Main App Component
function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    backgroundColor: "#1e3c72",
    padding: "15px",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
  };

  return (
    <Router>
      {/* 🔹 Navigation Bar */}
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>

      {/* 🔹 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* 🔹 Footer */}
      <footer style={{
        textAlign: "center",
        backgroundColor: "#1e3c72",
        color: "white",
        padding: "10px",
        position: "fixed",
        bottom: 0,
        width: "100%",
        fontSize: "14px"
      }}>
        <p>© 2025 React Static Router Assignment — All Rights Reserved</p>
      </footer>
    </Router>
  );
}

export default App;
