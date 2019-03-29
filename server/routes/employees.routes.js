const express = require('express');
const router = express.Router();
const employees = require('../controllers/employees.controller');

router.get('/', employees.getEmployees);
router.get('/:id', employees.getEmployee);
router.post('/', employees.createEmployee);
router.put('/:id', employees.editEmployee);
router.delete('/:id', employees.deleteEmployee);


module.exports = router;