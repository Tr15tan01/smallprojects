import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { productId } = useParams();

  return (
    <div>
      <h5>this is single Products page</h5>
      <p>The Product Id is: {productId}</p>
    </div>
  );
};
