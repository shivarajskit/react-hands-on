type ChildProps = {
  onSendData: (data: string) => void;
};

function Child({ onSendData }: ChildProps) {
  const sendDataToParent = (color: string) => {
    const data = color;
    onSendData(data); // call parent function with data
  };

  return (
    <div>
      <h3>Child Component</h3>
      <input type="text" onChange={(e) => sendDataToParent(e.target.value)} placeholder="Enter any color to send to parent" />
    </div>
  );
}

export default Child;