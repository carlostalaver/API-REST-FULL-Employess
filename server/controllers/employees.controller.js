const Employee = require('../models/employees')
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}
employeeCtrl.getEmployee = async (req, res) => {
    const emp = await Employee.findById(req.params.id, (err, res) => {
        if (err)
            console.error('No se encontraron el documento');
    })
    res.json(emp)
}
employeeCtrl.createEmployee = async ( req, res) => {
    console.log('---------->',req.body);
    const new_employee = new Employee(req.body);
     const emp_save = await new_employee.save();
    res.json(emp_save);    
}

employeeCtrl.editEmployee = async ( req, res) => {
    const {id} = req.params;
    const emplo_edit = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    } 
    const emp_ed = await Employee.findByIdAndUpdate(id, {$set:emplo_edit}, {new: true});
    res.json('actualizado');
}

employeeCtrl.deleteEmployee = async ( req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json('Eliminado')
} 


module.exports = employeeCtrl;