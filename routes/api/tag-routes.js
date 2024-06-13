const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  const data =  await Tag.findAll()
  console.log(data)
  res.json(data)

  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const data = await Tag.findOne({ where: {id:req.params.id}})
  console.log(data)
  res.json(data)

});

router.post('/', async (req, res) => {
  // create a new tag
  const data = await Tag.create(req.body)
  console.log(data)
  res.json(data)

});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  const data = await Tag.update(req.body, {where:{id:req.params.id}})
  console.log(data)
  res.json(data)
});

router.delete('/:id',async (req, res) => {
  // delete on tag by its `id` value
  const data = await Tag.destroy({where: {id:req.params.id}})
  console.log(data)
  res.json(data)
});

module.exports = router;
