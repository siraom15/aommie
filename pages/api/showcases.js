// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as data from '../../data/showcases.json';
export default (req, res) => {
    return res.status(200).json(data)
}
  