const route = require("express").Router();
const EmployeeControllers = require('../controllers/EmployeeController')

route.get("/", (req, res) => {
  res.send("Hello World!");
});

route.get("/employees", EmployeeControllers.getEmployees);
route.post("/employees/add", EmployeeControllers.addEmployee)
route.delete("/employees/delete/:id", EmployeeControllers.deleteEmployee)
route.put("/employees/edit/:id", EmployeeControllers.editEmployee)

module.exports = route;
