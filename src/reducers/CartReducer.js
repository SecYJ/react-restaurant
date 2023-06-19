const reducer = (state, action) => {
    const calculateTotals = (cart) => {
        let totalAmount = 0;
        let totalUnits = 0;

        cart.forEach(({ orderQty, price }) => {
            totalAmount += Number((orderQty * price).toFixed(2));
            totalUnits += orderQty;
        });

        return { totalAmount, totalUnits };
    };

    switch (action.type) {
        case "SET_CART": {
            const { payload } = action;
            return {
                ...state,
                cart: payload,
                ...calculateTotals(payload),
            };
        }

        case "ADD_TO_CART": {
            const { id } = action.payload;
            const isSavedItem = state.cart.find((item) => item.id === id);

            if (!isSavedItem) {
                const cart = [
                    ...state.cart,
                    { ...action.payload, orderQty: 1 },
                ];
                return { ...state, cart, ...calculateTotals(cart) };
            }

            const cart = state.cart.map((item) =>
                item.id === id ? { ...item, orderQty: item.orderQty + 1 } : item
            );

            return { ...state, cart, ...calculateTotals(cart) };
        }

        case "TOGGLE_CART_VISIBILITY": {
            return { ...state, cartVisible: action.payload };
        }

        case "REMOVE_CART_ITEM": {
            const cart = state.cart.filter(
                (item) => item.id !== action.payload
            );

            return { ...state, cart, ...calculateTotals(cart) };
        }

        case "UPDATE_CART_ITEM": {
            const { direction, id } = action.payload;

            const cart = state.cart.map((c) => {
                if (c.id !== id) return c;
                let qty;
                if (direction === "increment") qty = c.orderQty + 1;
                if (direction === "decrement") qty = c.orderQty - 1;

                return { ...c, orderQty: qty };
            });

            return { ...state, cart, ...calculateTotals(cart) };
        }

        case "CLEAR_CART": {
            return {
                ...state,
                totalAmount: 0,
                totalUnits: 0,
                cart: [],
            };
        }

        default:
            break;
    }

    return state;
};

export default reducer;
