import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
function App() {
  const name = "김현모"; // 원하는 이름으로 변경하세요.
  const handleClick = () => {
    console.log("버튼 클릭됨");
  };
  return (
    <div className="app">
      <Greeting userName={name} />
      <Button text="버튼" onButtonClick={handleClick} />
      <Counter />
    </div>
  );
}
export default App;
