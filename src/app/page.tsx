import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import QuickInfo from './components/QuickInfo';

export default function Home() {
  return (
    <main className="mt-[50px]">
      <Header />
      <Hero />
      <About />
      <Products />
      <QuickInfo />
    </main>
  );
}
