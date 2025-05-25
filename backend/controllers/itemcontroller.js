import Item from "../models/itemmodel.js";

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getItem = async (req, res) => {
  try {
    const itemType = req.params.type;
    const items = await Item.find({ type: itemType });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const saveItem = async (req, res) => {
  const item = new Item(req.body);
  await item
    .save()
    .then(() => res.json("Item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
  // try{
  //     const items = await User.find();
  //     res.json(users)}
  // catch{
  //     res.status(5000).json({message:error.message})
};
