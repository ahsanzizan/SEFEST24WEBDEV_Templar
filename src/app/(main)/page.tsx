import About from './parts/About';
import Home from './parts/Home';

export default function page() {
  return (
    <main className="overflow-hidden bg-primary">
      <Home />
      <About />
    </main>
  );
}
