import OneProduct from "../components/OneProduct";
import products from "../products";

const Originals = () => {
  console.log(products);

  return (
    <div>
      <section className="product-header">
        <header>
          <h2>
            •┈••✦ ❤<br /> ✦••┈•ORIGINALS•┈••✦ ❤<br /> ✦••┈•
          </h2>
          <h4>•┈••✦••┈•just for you and me•┈••✦••┈•</h4>
        </header>
      </section>
      <section className="products">
        <OneProduct />
      </section>
    </div>
  );
};

export default Originals;
