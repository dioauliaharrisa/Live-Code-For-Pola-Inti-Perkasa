import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import CreatePage from "./views/CreatePage";
import EditPage from "./views/EditPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="edit/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
