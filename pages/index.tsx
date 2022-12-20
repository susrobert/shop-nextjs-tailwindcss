import type { NextPage } from 'next';
import Layout from '../components/Layout';
import data from 'utils/data';
import ProductItem from '../components/ProductItem';

const Home: NextPage = () => {
  return (
    <div>
      <Layout title="Home Page">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {data.products.map((product: any) => (
            <ProductItem product={product} key={product.slug} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
