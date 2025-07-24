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
      <input className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500 w-full" type="text" onChange={(e) => sendDataToParent(e.target.value)} placeholder="Enter any color to send to parent" />
    </div>
  );
}

export default Child;