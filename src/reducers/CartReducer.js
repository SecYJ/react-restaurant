const reducer = (state, action) => {
    let cart = [...state.cart];

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
        case "ADD_TO_CART": {
            const { id } = action.payload;
            const isSavedItem = state.cart.find((item) => item.id === id);

            if (!isSavedItem) {
                cart.push({ ...action.payload, orderQty: 1 });
                return { ...state, cart, ...calculateTotals(cart) };
            }

            const newCart = state.cart.map((item) =>
                item.id === id ? { ...item, orderQty: item.orderQty + 1 } : item
            );

            const { totalAmount, totalUnits } = calculateTotals(newCart);

            return { ...state, cart: newCart, totalAmount, totalUnits };
        }

        case "TOGGLE_CART_VISIBILITY": {
            return { ...state, cartVisible: action.payload };
        }

        case "REMOVE_CART_ITEM": {
            const newCart = state.cart.filter(
                (item) => item.id !== action.payload
            );

            const { totalAmount, totalUnits } = calculateTotals(newCart);

            return { ...state, cart: newCart, totalAmount, totalUnits };
        }

        // NOTE: This might delete soon
        case "TOGGLE_CART_ITEM_AMOUNT": {
            const { option, id, inputValue } = action.payload;
            const newCart = state.cart.map((c) => {
                if (c.id !== id) return c;
                const { orderQty: q } = c;

                let qty =
                    option === "inc"
                        ? q + 1
                        : option === "dec"
                        ? q - 1
                        : inputValue;

                return {
                    ...c,
                    orderQty: qty,
                };
            });

            const { totalAmount, totalUnits } = calculateTotals(newCart);

            return { ...state, cart: newCart, totalAmount, totalUnits };
        }

        case "ITEM_AMOUNT_INCREMENT": {
            const { amount, id } = action.payload;

            const cart = state.cart.map((c) => {
                if (c.id !== id) return;
                return { ...c, orderQty: amount };
            });

            const { totalAmount, totalUnits } = calculateTotals(cart);

            return { ...state, cart, totalAmount, totalUnits };
        }

        case "ITEM_AMOUNT_DECREMENT": {
            const { amount, id } = action.payload;

            const cart = state.cart.map((c) => {
                if (c.id !== id) return;
                return { ...c, orderQty: amount };
            });

            const { totalAmount, totalUnits } = calculateTotals(cart);

            return { ...state, cart, totalAmount, totalUnits };
        }

        case "ITEM_AMOUNT_INPUT": {
            const { amount, id } = action.payload;

            const cart = state.cart.map((c) => {
                if (c.id !== id) return c;
                return { ...c, orderQty: amount };
            });

            const { totalAmount, totalUnits } = calculateTotals(cart);

            return { ...state, cart, totalAmount, totalUnits };
        }

        default:
            break;
    }

    return state;
};

export default reducer;
