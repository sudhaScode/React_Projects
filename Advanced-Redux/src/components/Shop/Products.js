import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const productList =[{
    id: "p1",
    title:'Test',
    price: 6,
    quantity:1,
    description: 'This is a first product to look for testing- amazing!',
    key: 1,
  },
  {
  id: "p2",
  title:'UnitTest',
  price: 10,
  quantity:1,
  description: 'This is a unit test product for testing products- realiable!',
  key: 2,}];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productList.map(item =>
        <ProductItem key = {item.key}
          item = {item}
        />)}
      </ul>
    </section>
  );
};

export default Products;
