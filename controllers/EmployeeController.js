const { employee } = require("../models");

class EmployeeController {
  static getEmployees(req, res) {
    // res.send("Employees Page");
    employee
      .findAll()
      .then((employees) => {
        res.json(employees);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static addEmployee(req, res) {
    const { name, email, salary, image, age } = req.body;
    employee
      .create({
        name,
        email,
        image,
        salary,
        age,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static deleteEmployee(req, res) {
    const id = Number(req.params.id);

    employee
      .destroy({
        where: {
          id,
        },
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }

  static editEmployee(req, res) {
    const { name, email, image, salary, age } = req.body;
    const id = Number(req.params.id);

    employee
      .update(
        {
          name,
          email,
          image,
          salary,
          age,
        },
        {
          where: {
            id,
          },
        }
      )
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
}

module.exports = EmployeeController;
