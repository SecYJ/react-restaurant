import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartCtx } from "../contexts/CartCtx";

const PurchasedTable = () => {
    const { totalAmount, totalUnits, cart } = useCartCtx();
    const [collapsed, setCollapsed] = useState(true);

    const purchaseList = collapsed ? cart.slice(0, 5) : cart;

    return (
        <table className="table w-full">
            <thead className="border-b-2 border-gray-300">
                <tr>
                    <td className="bg-white text-base" align="center">
                        商品
                    </td>
                    <td className="bg-white text-base" align="center">
                        数量
                    </td>
                    <td className="bg-white text-base" align="center">
                        小计
                    </td>
                </tr>
            </thead>
            {/* FIXME: TO FIXED LATER: SMOOTH TRANSITION */}
            <AnimatePresence>
                {collapsed
                    ? cart.slice(0, 5).map((item) => {
                          const { id, orderQty, price, name } = item;
                          return (
                              <motion.tr
                                  className="border-b"
                                  key={id}
                                  animate={{
                                      height: 0,
                                  }}
                              >
                                  <td>{name}</td>
                                  <td className="text-center">{orderQty}</td>
                                  <td className="text-center">
                                      RM {price.toFixed(2)}
                                  </td>
                              </motion.tr>
                          );
                      })
                    : cart.map((item) => {
                          const { id, orderQty, price, name } = item;
                          return (
                              <motion.tr
                                  className="border-b"
                                  key={id}
                                  animate={{
                                      height: "100%",
                                  }}
                              >
                                  <td>{name}</td>
                                  <td className="text-center">{orderQty}</td>
                                  <td className="text-center">
                                      RM {price.toFixed(2)}
                                  </td>
                              </motion.tr>
                          );
                      })}
                {/* <motion.tbody
                    animate={{
                        y: "100%",
                        
                    }}
                
                >
                    {purchaseList.map((item) => {
                        const { id, orderQty, price, name } = item;
                        return (
                            <tr className="border-b" key={id}>
                                <td>{name}</td>
                                <td className="text-center">{orderQty}</td>
                                <td className="text-center">
                                    RM {price.toFixed(2)}
                                </td>
                            </tr>
                        );
                    })}
                </motion.tbody> */}
            </AnimatePresence>

            <tfoot>
                <tr className="text-center">
                    <td className="bg-white"></td>
                    <td className="bg-white text-lg">总数量: {totalUnits}</td>
                    <td className="bg-white text-lg">
                        总额: RM {totalAmount.toFixed(2)}
                    </td>
                </tr>
                <tr>
                    <td className="bg-white"></td>
                    <td className="bg-white"></td>
                    <td className="bg-white text-center">
                        {cart.length > 5 && (
                            <button
                                type="button"
                                className="btn-primary btn-md btn text-base"
                                onClick={() =>
                                    setCollapsed((collapse) => !collapse)
                                }
                            >
                                {collapsed ? "显示更多" : "收起"}
                            </button>
                        )}
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default PurchasedTable;
