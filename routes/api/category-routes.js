const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    Category.findAll().then(async (categoryData) => {
      result = categoryData;
      for (let index = 0; index < categoryData.length; index++) {
        await Product.findAll({
          where: {
            category_id: categoryData[index].id,
          },
        }).then((products) => {
          result[index].dataValues["products"] = products;
        });
      }
      res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    Category.findOne({
      where: {
        id: req.params.id,
      },
    }).then(async (categoryData) => {
      result = categoryData;

      await Product.findAll({
        where: {
          category_id: categoryData.id,
        },
      }).then((products) => {
        result.dataValues["products"] = products;
      });

      res.status(200).json(result);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // create a new category  
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(
    {      
      category_name: req.body.category_name,      
    },
    {
      // Gets the Categories based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      // Sends the updated Category as a json response
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
