const CartTop = () => {
    const styles = "bg-transparent text-2xl";

    return (
        <thead>
            <tr>
                <th className={styles}></th>
                <th className={styles}>图片</th>
                <th className={styles}>名称</th>
                <th className={styles}>数量</th>
                <th className={styles}>价格</th>
                <th className={styles}></th>
            </tr>
        </thead>
    );
};

export default CartTop;
