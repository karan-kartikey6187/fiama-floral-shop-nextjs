import ShopPage from "./ShopPage";

export const metadata = {
    title: "Shop",
    description: "Shop fresh and beautiful flowers at Fiama Floral Shop.",
};

export default async function Shop({ searchParams }) {

    const params = await searchParams;
    const search = params?.search || "";

    return <ShopPage search={search}/>;
}