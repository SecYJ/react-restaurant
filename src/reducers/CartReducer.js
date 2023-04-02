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
            return { ...state, cartVisible: !state.cartVisible };
        }

        case "CALCULATE_TOTAL": {
            // There are 2 types of total, which are total quantity to display on the floating  button
            // and total amount that should be display on the floating btn and checkout}
        }

        case "REMOVE_CART_ITEM": {
            const newCart = state.cart.filter(
                (item) => item.id !== action.payload
            );

            const { totalAmount, totalUnits } = calculateTotals(newCart);

            return { ...state, cart: newCart, totalAmount, totalUnits };
        }

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

        default:
            break;
    }

    return state;
};

export default reducer;
