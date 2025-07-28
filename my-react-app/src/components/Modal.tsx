function Modal({ header, footer, children }) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
}

export default Modal;