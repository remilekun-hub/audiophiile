import { data } from "../../../data";

export default function handler(req, res) {
  return res.status(200).json(data);
}
