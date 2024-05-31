const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  const data =  Tag.findAll({id,Category,Product})
  console.log(data)
  res.json(data)

  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const data =  Tag.findOne({id,Tag,Product,ProductTag})
  console.log(data)
  res.json(data)

});

router.post('/', (req, res) => {
  // create a new tag
  const data =  Tag.create({id,Tag,Product,ProductTag})
  console.log(data)
  res.json(data)

});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const data =  Tag.update({id})
  console.log(data)
  res.json(data)
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const data = Tag.destroy({id})
  console.log(data)
  res.json(data)
});

module.exports = router;
