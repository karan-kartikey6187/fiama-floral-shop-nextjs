'use client'
import { WishlistCard } from '@/components/cards/WishlistCard'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'

const WishlistProductsList = () => {

  const { wishlistItems } = useSelector((state) => state.wishlist)

  return (
    <div className="wishlist-items-wrapper">
        {wishlistItems.length === 0 ?
            <Fragment>
                <p className='fs-3 text-danger text-center'>No items available in your wishlist</p>
            </Fragment> :
            <Fragment>
                {wishlistItems?.map((item) => {
                    return (
                        <WishlistCard key={item.id} product={item} />
                    )
                })}
            </Fragment>
        }
    </div>
  )
}

export default WishlistProductsList
