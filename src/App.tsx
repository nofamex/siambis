import Footer from "./components/Footer";
import Header from "./components/Header";
import Button from "./components/Button";
import TemplateList from "./components/TemplateList";
import { useState } from "react";
import TaskAdder from "./components/TaskAdder";

function App() {
  const [inputState, setInputState] = useState("close");

  const addTaskHandler = () => {
    setInputState("open");
  };

  const closeInputHandler = () => {
    setInputState("close");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#281c3f] w-[350px] h-[500px]">
      <Header />
      <div className="w-full h-4/6 px-4 py-6 flex flex-col">
        {inputState === "close" ? (
          <>
            <Button handler={addTaskHandler} text={"TAMBAH"} />
            <div className="w-full h-full p-4 space-y-2">
              <TemplateList />
              <TemplateList />
              <TemplateList />
            </div>
          </>
        ) : (
          <TaskAdder closeHandler={closeInputHandler} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
