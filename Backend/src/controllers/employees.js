//const { pool } = require("../configs/database.js");

const queries = {
  getAllEmployees: "SELECT * FROM employees",
};

//get Employees
const getEmployees = () => {
  try {
    //const results = pool.query(queries.getAllEmployees);
   // return results;
  } catch (error) {
    throw error;
  }
};

module.exports = { getEmployees };
