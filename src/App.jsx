import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import WorkoutPlan from "./pages/WorkoutPlan.jsx";
import MealPlan from "./pages/MealPlan.jsx";
import Premium from "./pages/Premium.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout-plan" element={<WorkoutPlan />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
