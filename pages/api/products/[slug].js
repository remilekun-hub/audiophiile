import { data } from "../../../data";

export default function handler(req, res) {
  const { slug } = req.query;

  const singleproduct = data.filter((d) => d.slug === slug);
  return res.status(200).send(singleproduct);
}
