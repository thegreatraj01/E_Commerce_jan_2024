import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RealeatedProduct from '../Components/RealeatedProduct/RealeatedProduct';

const Product = () => {
  const { allproduct } = useContext(ShopContext);
  const { productid } = useParams();
  const product = allproduct.find((e) => e.id.toString() === productid);

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DiscriptionBox />
      <RealeatedProduct />
    </div>
  )
}

export default Product