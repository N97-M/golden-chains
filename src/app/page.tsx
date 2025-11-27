
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import FloatingContactButton from './components/FloatingContactButton';

export default function Home() {
  return (
    <>
      {/* جملة ترحيبية بالعربية */}
      <div
        className="max-w-3xl mx-auto mb-4 text-2xl font-bold text-right"
        dir="rtl"
        style={{ fontFamily: 'Tajawal, Cairo, Arial, sans-serif' }}
      >
        مرحبا بكم في جولدن تشينز للتجارة ذ.م.م
      </div>
      <Hero />
      <About />
      <Products />
      <FloatingContactButton />
    </>
  );
}
