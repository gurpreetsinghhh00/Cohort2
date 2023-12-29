const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  username = req.body.username;
  password = req.body.password;

  try {
    await Admin.create({
      username: username,
      password: password,
    });
    res.status(200).json({
      message: "Admin created successfully",
    });
  } catch (e) {
    res.status(404).json({
      message: "Admin not created",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  try {
    const course = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    res.status(200).json({
      message: "Course created successfully",
      courseId: course._id,
    });
  } catch (e) {
    res.status(404).json({
      message: "Failed to create new course",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const allCourses = await Course.find({});
    res.status(200).json({
      courses: allCourses,
    });
  } catch (e) {
    res.status(404).json({
      message: e.message,
    });
  }
});

module.exports = router;
