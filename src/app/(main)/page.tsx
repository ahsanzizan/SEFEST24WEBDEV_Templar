import About from './parts/About';
import Event from './parts/Event';
import Home from './parts/Home';

export default function page() {
  return (
    <main className="overflow-hidden bg-primary">
      <Home />
      <About />
      <Event />
    </main>
  );
}
