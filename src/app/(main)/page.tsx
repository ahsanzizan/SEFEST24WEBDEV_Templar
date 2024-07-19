import About from './parts/About';
import Event from './parts/Event';
import Home from './parts/Home';
import Organization from './parts/Organization';

export default function page() {
  return (
    <main className="flex flex-col gap-y-11 overflow-hidden bg-primary">
      <Home />
      <About />
      <Organization />
      <Event />
    </main>
  );
}
