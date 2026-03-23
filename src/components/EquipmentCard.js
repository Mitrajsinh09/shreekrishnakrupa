import React from "react";

function EquipmentCard({ equipment }) {
  return (
    <div style={styles.card}>
      <img src={equipment.image} alt={equipment.name} style={styles.image} />
      <h3>{equipment.name}</h3>
      <p>₹{equipment.price}/day</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    width: "250px",
    textAlign: "center",
  },
  image: {
    width: "100%",
  },
};

export default EquipmentCard;