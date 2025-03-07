import "./ProductCard.css";


const ProductCard = (props) => {
   
  return (
    // React Fragment
    <>   
      <div className="product-card">
        <img src={props.image} alt={props.name}/>

        <p>{props.name}</p>
      </div>

    </>
  );
};

export default ProductCard;
