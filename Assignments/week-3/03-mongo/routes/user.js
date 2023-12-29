const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  username = req.body.username;
  password = req.body.password;

  try {
    await User.create({
      username: username,
      password: password,
    });
    res.status(200).json({
      message: "User created successfully",
    });
  } catch (e) {
    console.log(e.message);
    res.status(404).json({
      message: "User not created. Something went wrong",
    });
  }
});

router.get("/courses", async (req, res) => {
  try {
    const allCourses = await Course.find({});
    res.status(200).json({
      courses: allCourses,
    });
  } catch (e) {
    res.status(404).json({
      message: "Something went wrong",
    });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  try {
    await User.updateOne(
      {
        username: username,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );
  } catch (e) {
    res.status(404).json({
      message: "Purchase not complete",
    });
  }
  res.json({
    message: "Purchase successfull",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  try {
    const user = await User.findOne({
      username: username,
    });
    const purchases = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });
    res.status(200).json({
      purchasedCourses: purchases,
    });
  } catch (e) {
    res.json({
      message: "Something went wrong",
    });
  }
});

module.exports = router;
