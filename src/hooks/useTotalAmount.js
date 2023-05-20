const useTotalAmount = (amount, method) => {
    const sst = Number((amount * 0.06).toFixed(2));
    let total = 0;

    if (method === "外送") total = amount + 5;
    else total = amount;

    total = Number(total.toFixed(2));

    return { sst, total };
};

export default useTotalAmount;
