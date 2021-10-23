const route = require("express").Router();
const EmployeeControllers = require('../controllers/EmployeeController')

route.get("/", (req, res) => {
  res.send("Hello World!");
});

route.get("/employees", EmployeeControllers.getEmployees);

module.exports = route;
