const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

const usersRoutes = require("./users.routes")
router.use("/users", usersRoutes)

router.post("/upload", isAuthenticated, async (req, res, next) => {
  try {
      const { image } = req.body
      await User.create({ image })
      return res.status(200).json(image)
  } catch (error) {
      next(error)
  }
})

module.exports = router;