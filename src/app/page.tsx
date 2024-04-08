import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <div className="h-max md:h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-zink-900">
        <NavBar />
        <Header />
      </div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  );
}
