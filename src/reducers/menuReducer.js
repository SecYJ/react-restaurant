const randomSort = (arr) => arr.sort(() => Math.random() - 0.5);

const reducer = (state, { payload, type }) => {
    const filterMenu = (category) => {
        if (category === "全部") return [...state.menu];

        return state.menu.filter((p) => p.category === category);
    };

    switch (type) {
        case "SET_MENU": {
            if (state.menu.length === 0) {
                return {
                    ...state,
                    menu: randomSort([...payload]),
                    filtered_menu: randomSort([...payload]),
                };
            }

            return {
                ...state,
                filtered_menu: filterMenu(state.currentSelect),
            };
        }

        case "SEARCH_PRODUCTS": {
            if (payload === "") {
                return {
                    ...state,
                    filtered_menu: filterMenu(state.currentSelect),
                };
            }

            const filtered_menu = state.menu.filter((p) =>
                p.name.toLowerCase().includes(payload)
            );

            return {
                ...state,
                filtered_menu,
            };
        }

        case "SORT_BY_CATEGORY": {
            return {
                ...state,
                currentSelect: payload,
                filtered_menu: filterMenu(payload),
            };
        }

        case "SET_SEARCH": {
            return { ...state, search: payload };
        }
    }

    throw new Error("Unknown action" + type);
};

export default reducer;
