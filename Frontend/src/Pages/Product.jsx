import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DiscriptionBox from '../Components/DiscriptionBox/DiscriptionBox';
import RealeatedProduct from '../Components/RealeatedProduct/RealeatedProduct';
import UserLayout from '../Components/UserLayout/UserLayout';

const Product = () => {
  const { allproduct } = useContext(ShopContext);
  const { productid } = useParams();
  const product = allproduct?.find((e) => e._id.toString() === productid);
  // console.log('product.jsx', product ,'allproduct', allproduct , 'productid', productid)

  return (
    <div>
      <UserLayout>
        <Breadcrums product={product && product} />
        <ProductDisplay product={product && product} />
        <DiscriptionBox />
        <RealeatedProduct />
      </UserLayout>

    </div>
  )
}

export default Product