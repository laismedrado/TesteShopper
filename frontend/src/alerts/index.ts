import { toast } from "react-toastify";

export const alertSuccess = async (msg: string) => {
  toast(msg, { type: "success" });
};
export const alertError = (msg: string, err?: any) => {
  toast(msg, { type: "error" });
  if (err) console.log(err);
};
