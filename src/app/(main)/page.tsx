import About from './parts/About';
import Home from './parts/Home';

export default function page() {
  return (
    <main className="overflow-hidden bg-[#FFFBF2]">
      <Home />
      <About />
    </main>
  );
}
