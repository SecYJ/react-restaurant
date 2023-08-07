import * as yup from "yup";
import "yup-phone-lite";

export const paymentSchema = yup.object({
    username: yup
        .string()
        .required("姓名不可为空")
        .max(20, "姓名长度不可超过 20 个文字"),
    phone: yup
        .string()
        .phone("MY", "手机号码不符合")
        .required("手机号码不可为空"),
    email: yup.string().email("Email 格式不正确").required("Email 不可为空"),
    address: yup.string().required("地址为必填"),
});
