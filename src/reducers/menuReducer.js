const reducer = (state, action) => {
    const filterProducts = ({ arrProp, condition = "全部" }) => {
        if (condition === "全部") return [...state.menu];
        return state.menu.filter((p) => p[arrProp] === condition);
    };

    switch (action.type) {
        case "SET_MENU": {
            return {
                ...state,
                menu: [...action.payload],
                filtered_menu: [...action.payload],
            };
        }

        case "FILTER_PRODUCTS": {
            if (action.payload === "") {
                return {
                    ...state,
                    filtered_menu: filterProducts({
                        arrProp: "category",
                        condition: state.currentSelect,
                    }),
                };
            }

            const filtered_menu = state.menu.filter((p) =>
                p.name.toLowerCase().includes(action.payload)
            );

            return {
                ...state,
                filtered_menu,
            };
        }

        case "SORT_BY_CATEGORY": {
            const { payload } = action;
            const isAllProducts = payload === "全部";

            if (isAllProducts) {
                return {
                    ...state,
                    filtered_menu: state.menu,
                    currentSelect: payload,
                };
            }

            return {
                ...state,
                currentSelect: payload,
                filtered_menu: filterProducts({
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
