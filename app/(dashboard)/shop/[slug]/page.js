import ShopPage from "../ShopPage";

export const metadata = {
    title: "Shop",
    description: "Shop fresh and beautiful flowers at Fiama Floral Shop.",
};

const Shop = async ({ params, searchParams  }) => {

  const { slug } = await params;

  const paramsData = await searchParams;

  const search = paramsData?.search || "";

  return <ShopPage  slug={slug} search={search}/>;
};

export default Shop;
