import React, { useContext, useState } from 'react';
import './CSS/shopcategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Items/Item';
import UserLayout from '../Components/UserLayout/UserLayout';
import PaginationPage from '../Components/Pagination/Pagination';

const ShopCategory = (props) => {
  const { allproduct } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  let postPerPage = 8; // Define as normal variable

  // Filter products by category
  const thisCategorypost = allproduct.filter((item) => props.category === item.category);

  // Calculate pagination
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = thisCategorypost.slice(firstPostIndex, lastPostIndex);

  return (
    <UserLayout>
      <div className='shop-category'>
        <img className='shop-category-banner' src={props.banner} alt="banner" />

        <div className="shopcategory-product">
          {currentPosts.map((item, i) => (
            <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))}
        </div>

        <div className=' d-flex justify-content-center my-3'>
          {/* Pass necessary props to PaginationPage component */}
          <PaginationPage totalPosts={thisCategorypost.length} currentPage={currentPage} setCurrentPage={setCurrentPage} postPerPage={postPerPage} />
        </div>
      </div>
    </UserLayout>
  );
}

export default ShopCategory;
