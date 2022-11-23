import { toast } from "react-toastify";

export const alertSuccess = async (msg: string) => {
  toast(msg, { type: "success" });
};
export const alertError = (msg: string) => {
  toast(msg, { type: "error" });
};
