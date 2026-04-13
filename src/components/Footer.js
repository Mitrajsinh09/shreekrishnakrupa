import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Krushna Krupa Construction Rentals</p>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#111",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    marginTop: "20px",
  },
};

export default Footer;