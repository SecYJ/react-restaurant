const reducer = (state, action) => {
    const filterProducts = ({ arrProp, condition = "全部" }) => {
        if (condition === "全部") return [...state.products];
        return state.products.filter((p) => p[arrProp] === condition);
    };

    switch (action.type) {
        case "SET_PRODUCTS": {
            return {
                ...state,
                products: [...action.payload],
                filtered_products: [...action.payload],
            };
        }

        case "FILTER_PRODUCTS": {
            if (action.payload === "") {
                return {
                    ...state,
                    filtered_products: filterProducts({
                        arrProp: "category",
                        condition: state.currentSelect,
                    }),
                };
            }

            const filtered_products = state.products.filter((p) =>
                p.name.toLowerCase().includes(action.payload)
            );

            return {
                ...state,
                filtered_products,
            };
        }

        case "SORT_BY_CATEGORY": {
            const { payload } = action;
            const isAllProducts = payload === "全部";

            if (isAllProducts) {
                return {
                    ...state,
                    filtered_products: state.products,
                    currentSelect: payload,
                };
            }

            return {
                ...state,
                currentSelect: payload,
                filtered_products: filterProducts({
                    arrProp: "category",
                    condition: payload,
                }),
            };

            // if (state.currentSelect === "全部")
            //     return { ...state, products: state.products };

            // const filtered_products = state.products.filter(
            //     (product) => product.category === action.payload
            // );
            // return { ...state, filtered_products };
        }

        case "SET_SEARCH": {
            return { ...state, search: action.payload };
        }
    }

    throw new Error("Unknown action" + action.type);
};

export default reducer;

/*
    MY IDEAS TO fix the problem
    1. Keep the search state in SEARCH component, when debounce update then using dispatch to update global state;
*/
