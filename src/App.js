import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import { BrowserRouter } from "react-router-dom";
function App() {
  const name = "김현모"; // 원하는 이름으로 변경하세요.
  const handleClick = () => {
    console.log("버튼 클릭됨");
  };
  return (
    <BrowserRouter>  </BrowserRouter>
  );
}
export default App;
