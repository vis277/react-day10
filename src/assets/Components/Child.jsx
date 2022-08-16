const Child = ({ changeMessage }) => {
  console.log(changeMessage);

  return (
    <>
      <button onClick={() => changeMessage("my name is anbc")}>Click me</button>
    </>
  );
};
export default Child;
