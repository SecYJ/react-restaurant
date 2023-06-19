const reducer = (state, action) => {
    const filterProducts = (productCategory) => {
        if (productCategory === "全部") return [...state.menu];

        return state.menu.filter((p) => p.category === productCategory);
    };

    switch (action.type) {
        case "SET_MENU": {
            if (state.menu.length === 0) {
                return {
                    ...state,
                    menu: [...action.payload],
                    filtered_menu: [...action.payload],
                };
            }

            return {
                ...state,
                filtered_menu: filterProducts(state.currentSelect),
            };
        }

        case "SEARCH_PRODUCTS": {
            if (action.payload === "") {
                return {
                    ...state,
                    filtered_menu: filterProducts(state.currentSelect),
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
                    filtered_menu: [...state.menu],
                    currentSelect: payload,
                };
            }

            return {
                ...state,
                currentSelect: payload,
                filtered_menu: filterProducts(payload),
            };
        }

        case "SET_SEARCH": {
            return { ...state, search: action.payload };
        }
    }

    throw new Error("Unknown action" + action.type);
};

export default reducer;
