const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint


  // find all categories
  // be sure to include its associated Products

  router.get('/', async (req, res) => {
    const data= await Category.findAll({raw:true})
    console.log(data)
    res.json(data)
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const data = await Category.findOne({id,Category,Product})
  console.log(data)
  res.json(data)
});



router.post('/', async(req, res) => {
  // create a new category
  const data = await Category.create({id})
  console.log(data)
  res.json(data)
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const data = await Category.update({id})
  console.log(data)
  res.json(data)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
   const data = await Category.destroy({id})
  console.log(data)
  res.json(data)

});

module.exports = router;
