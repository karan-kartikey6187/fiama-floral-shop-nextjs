import ShopPage from "../ShopPage";

export const metadata = {
    title: "Shop",
    description: "Shop fresh and beautiful flowers at Fiama Floral Shop.",
};

const Shop = async ({ params }) => {

  const { slug } = await params;

  return <ShopPage slug={slug}/>;
};

export default Shop;
