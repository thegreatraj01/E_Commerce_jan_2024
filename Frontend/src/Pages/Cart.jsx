import React from 'react'
import CartItems from '../Components/CartItems/CartItems'
import UserLayout from '../Components/UserLayout/UserLayout'

const Cart = () => {
  return (
    <div>
      <UserLayout>
        <CartItems />
      </UserLayout>
    </div>
  )
}

export default Cart