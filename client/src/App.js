import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import MovieCard from "./components/MovieCard";
import ReviewPopup from "./components/ReviewPopup";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import { useState } from "react";
import "./styles.css";

function Home() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      name: "Thaai Kizhavi",
      year: 2026,
      cast: "Radhika sarathkumar",
      plot: "Pavunuthayi is a fiercely independent, intimidating elderly woman in a rural village, known for being tough, ruthless, and blunt-especially as a moneylender whose strict enforcement of dues makes her feared by locals."
    },
    {
      name: "With Love",
      year: 2026,
      cast: "Abishan jeevinth and Anaswara rajan",
      plot: "Sathya reluctantly agrees to a blind date arranged by his sister and meets Monisha. They discover they attended the same school years ago. Bonding over shared memories and old crushes, they reconnect with their past and grow closer."
    },
    {
      name: "Sirai",
      year: 2025,
      cast: "Vikram prabhu and Anishma anilkumar",
      plot: "A cop escorts a prisoner during a transfer from Vellore prison to Sivagangai court, leading to unexpected interactions between them."
    },
    {
      name:"LIK: Love Insurance Kompany",
      year: 2026,
      cast:"SuperStar Pradeep Ranganathan and Krithi Shetty",
      plot:"A man who believes in old-school love meets Dheema, a woman embracing tech-driven romance. Their growing relationship challenges modern love norms and pits them against Suriyan, a powerful CEO of a love app."
    },
    {
      name:"Jana Nayagan",
      year: 2026,
      cast: "Thalapathy Vijay and National Crush Mamitha Biju",
      plot: "Ideological enemies-one populist, one authoritarian-meet again when a child's fear awakens old conflicts, pulling an ex-cop into a struggle beyond vengeance."
    }
  ];

  return (
    <>
      <Navbar />  
      <Slider />

      {movies.map((m, i) => (
        <MovieCard key={i} movie={m} openForm={setSelectedMovie} />
      ))}

      {selectedMovie && (
        <ReviewPopup movie={selectedMovie} close={() => setSelectedMovie(null)} />
      )}
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;