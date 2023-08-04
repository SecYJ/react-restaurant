import * as yup from "yup";

export const paymentSchema = yup.object({
    username: yup
        .string()
        .required("姓名为必填")
        .max(20, "姓名长度不可超过 20 个文字"),
});
