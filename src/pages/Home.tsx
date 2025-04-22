import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="/images/produits/marque.jpeg"
            alt="Produits de soin"
          />
          <div className="absolute inset-0 bg-plant-900/30 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.home.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-white">
            {t.home.hero.subtitle}
          </p>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-block bg-plant-600 px-8 py-3 text-base font-medium text-white hover:bg-plant-700"
            >
              {t.home.hero.cta}
            </Link>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-serif font-bold text-plant-800 mb-8">{t.home.featured}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-plant-800">{product.name}</h3>
                <p className="mt-1 text-plant-600">{product.price} €</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-plant-50">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="relative">
            <img
              src="/images/produits/groupe.jpeg"
              alt="Soins naturels"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-10 lg:mt-0 lg:pl-8">
            <h2 className="text-3xl font-serif font-bold text-plant-800 mb-4">{t.home.promise.title}</h2>
            <p className="text-lg text-plant-700 mb-6">
              {t.home.promise.description}
            </p>
            <Link
              to="/about"
              className="inline-block bg-plant-600 text-white px-8 py-3 rounded-md hover:bg-plant-700 transition-colors"
            >
              {t.home.promise.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;