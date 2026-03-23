// import React from "react";

// function Navbar() {

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     element.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav style={styles.nav}>
//       <h2>Krishna Krupa</h2>

//       <div>
//         <span onClick={() => scrollToSection("home")} style={styles.link}>Home</span>
//         <span onClick={() => scrollToSection("about")} style={styles.link}>About</span>
//         <span onClick={() => scrollToSection("services")} style={styles.link}>Services</span>
//         <span onClick={() => scrollToSection("equipment")} style={styles.link}>Equipment</span>
//         <span onClick={() => scrollToSection("contact")} style={styles.link}>Contact</span>
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   nav: {
//     position: "fixed",   // 🔥 important
//     top: 0,
//     width: "100%",
//     display: "flex",
//     justifyContent: "space-between",
//     padding: "15px 30px",
//     background: "#111",
//     color: "#fff",
//     zIndex: 1000,
//   },
//   link: {
//     margin: "0 12px",
//     cursor: "pointer",
//   },
// };

// export default Navbar;
import React from "react";

function Navbar() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("❌ Section not found:", id);
    }
  };

  return (
    <nav style={styles.nav}>
      <h2>Krishna Krupa</h2>

      <div>
        <span onClick={() => scrollToSection("home")} style={styles.link}>Home</span>
        <span onClick={() => scrollToSection("about")} style={styles.link}>About</span>
        <span onClick={() => scrollToSection("services")} style={styles.link}>Services</span>
        <span onClick={() => scrollToSection("equipment")} style={styles.link}>Equipment</span>
        <span onClick={() => scrollToSection("contact")} style={styles.link}>Contact</span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#111",
    color: "#fff",
    zIndex: 1000,
  },
  link: {
    margin: "0 12px",
    cursor: "pointer",
    fontWeight: "500",
  },
};

export default Navbar;