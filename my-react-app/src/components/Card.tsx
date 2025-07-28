function Card({ children }) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      {children}
    </div>
  );
}

export default Card;