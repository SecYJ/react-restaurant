import ProductsCtxProvider from "../contexts/ProductsCtx";
import CartCtxProvider from "../contexts/CartCtx";
import ProductList from "../components/ProductList";
import ProductSidebar from "../components/ProductSidebar";

const Menu = () => {
    return (
        <main className="container my-20">
            <div className="flex gap-8">
                <ProductsCtxProvider>
                    <div className="sticky left-0 top-[160px] h-full w-1/4">
                        <ProductSidebar />
                    </div>
                    <div className="w-3/4">
                        {/* <CartCtxProvider> */}
                        <ProductList />
                        {/* </CartCtxProvider> */}
                    </div>
                </ProductsCtxProvider>
            </div>
        </main>
    );
};
export default Menu;

// TODO: fall back that provide to productList if search result is 0 | empty
//

/*
1. Hide the navigation once the input.length !== 0
- requirements : based on the input's length to determine

2. Shows the search result length
- requirements: filter data using filter method

COMPONENT TREES

ProductSidebar -> Search && Navigation

if using useState as local state to control input
1. When user click on navigation, dispatch an update to ProductsContext update the product list
2. Search input's length !== 0 then hide the ProductsList component

*/
