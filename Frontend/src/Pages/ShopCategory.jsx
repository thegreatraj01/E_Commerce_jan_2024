import React, { useContext } from 'react';
import './CSS/shopcategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';
import UserLayout from '../Components/UserLayout/UserLayout';


const ShopCategory = (props) => {
  const { allproduct } = useContext(ShopContext);

  return (
    <UserLayout>
      <div className='shop-category'>
        <img className='shop-category-banner' src={props.banner} alt="banner" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12 </span> Out of 36 products
          </p>
          <div className="shop-category-sort">
            short by <img src={dropdown_icon} alt="dropdownicon" />
          </div>
        </div>
        <div className="shopcategory-product">
          {allproduct.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </UserLayout>

  )
}

export default ShopCategory