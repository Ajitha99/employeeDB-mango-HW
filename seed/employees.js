const db = require('../db');
const Employee = require('../models/employee');
db.on('error',console.error.bind(console,'MangoDB connection error:'))

const main = async () =>{
    const employees = [
        { 
		first_name: "Miguel", 
		last_name: "Lo",
		email: "MiguelLo@YOLO.com",
		job_title: "Software Engineering Instructor",
		address: {
			street: "5th Ave",
        		city: "New York",
        		state: "NY",
        		zip: 10010
			} 
	   },
        {
		first_name: "Bunny", 
		last_name: "sal",
		email: "bunny.sal@gmail.com",
		job_title: "Independent carpenter",
		address: {
			street: "75 Fieldcrest Ave",
        		city: "Edison",
        		state: "NJ",
        		zip: 08837
			} 
	   },
        { 
		first_name: "Ron", 
		last_name: "Adam",
		email: "adam.ron@gmail.com",
		job_title: "Doctor",
		address: {
			street: "20 Observatory Rd",
        		city: "Los Angeles",
        		state: "CA",
        		zip: 90027
			} 
		
		},
        {
		first_name: "Lora", 
		last_name: "Smith",
		email: "lora.email@gmail.com",
		job_title: "Cloud Architect",
		address: {
			street: "96 Pompton Ave 2nd Floor",
        		city: "Charlotte",
        		state: "NC",
        		zip: 28202
			} 
	  },
        {	
		first_name: "Ludkee", 
		last_name: "Aleks",
		email: "ludkee.aleks@gmail.com",
		job_title: "Cloud Architect",
		address: {
			street: "50 Morgon Ave",
        		city: "Chattanooga",
        		state: "TN",
        		zip: 37415
			}
		
	 }
    ] 
    await Employee.insertMany(employees);
    console.log("Created employees!");
   
}

const run = async () =>{
    await main();
    db.close();
}

run();