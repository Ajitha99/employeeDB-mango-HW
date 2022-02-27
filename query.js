//CRUD actions
const e = require('express');
const db = require('./db');
const Employee = require('./models/employee');
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// finds all employees

const findAll = async () => {
    const allEmp = await Employee.find({})
    console.log(allEmp);
}
// finding one employee
const findOneEmp = async () => {
    const oneEmp = await Employee.findOne({first_name: "Ron"});
    console.log(oneEmp);
}
//creates one employee
const createOneEmp = async () => {
    const createEmp = new Employee({
        first_name: "Christian", 
		last_name: "Koblick",
		email: "chris.kob@gmail.com",
		job_title: "Senior Clerk",
		address: {
			street: "3100 Hamilton Blvd",
        	city: "Newark",
        	state: "NJ",
    		zip: 07104
			}
    });
    await createEmp.save();
    console.log("Created Employee!");
}
// creates three employees
const createManyEmp = async () => {
    const createOne = new Employee({
        first_name: "Alex", 
		last_name: "Smith",
		email: "smith.alex@gmail.com",
		job_title: "Nurse",
		address: {
			street: "3640 Colonel Glenn Hwy",
        	city: "Dayton",
        	state: "OH",
    		zip: 45435
			}
    });
    await createOne.save();
    const createTwo = new Employee({
        first_name: "Jesse", 
		last_name: "Xiao",
		email: "xios.j@gmail.com",
		job_title: "Lawyer",
		address: {
			street: "26120 104th Ave SE",
        	city: "Kent",
        	state: "WA",
     		zip: 98030
			}
    });
    await createTwo.save();
    const createThree = new Employee({
        first_name: "Tom", 
		last_name: "Jerry",
		email: "tom.jerry@gmail.com",
		job_title: "Market Analyst",
		address: {
			street: "4245 E Berry St",
        	city: "Fort Worth",
        	state: "TX",
        	zip: 76105
			}
    });
    await createThree.save();
    console.log("Created three employees!")
}
// update one employee
const updateEmp = async () => {
    const updateAnEmp = await Employee.updateOne({ email: "tom.jerry@gmail.com" }, { email: "tom.texas@gmail.com" });
    console.log(updateAnEmp);
  }
// delete an employee
const deleteEmp = async () => {
    const deleteOneEmp = await Employee.deleteOne({ first_name: "Jesse" });
    console.log(deleteOneEmp);
  }
// return a list of all employees' full names (first_name + last_name)
const empFullName = async () =>{
    //gets all the records and filters and returns only first_name and last_name since their values are 1;
    //by default, it returns _id but here we need only full name so by _id value 0 then _id is ommited from
    // the result.
    const eFullName = await Employee.find({},{first_name: 1, last_name: 1, _id:0});
    // console.log(eFullName);
    //console.log(eFullName.length);
    for(let i = 0; i < eFullName.length; i++){
        console.log(`${eFullName[i].first_name} ${eFullName[i].last_name}`)
    }
   
}

const run = async () => {
    await findAll();
    // await findOneEmp();
    // await createOneEmp();
    // await createManyEmp();
    // await updateEmp();
    // await deleteEmp();
    // await empFullName(); 
    db.close()
  }
  
  
  run()








  //projections-
//   const eFullName = await Employee.find({})
//   .populate('first_name','last_name')
//   .where('first_name').equals(true)
//   .where('last_name').equals(true);
//   console.log(eFullName);

    // eFullName.select('first_name last_name');
    // const result = eFullName.project();
    // console.log(result);