import MainPage from "./assets/components/MainPage";
import { Route, Routes } from "react-router-dom";
import MealInfo from "./assets/components/MealInfo";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:mealid" element={<MealInfo />} />
      </Routes>
    </div>
  );
}

export default App;
