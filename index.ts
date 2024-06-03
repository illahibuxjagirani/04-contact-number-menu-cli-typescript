#! /usr/bin/env node

import inquirer from "inquirer";

// our setup is ready we can start now

console.log("Welcome to Contact Numbers Menu!")
// define type of array
type ContactType = {ID: number, Name: string, PhoneNo: number};

let contacts: ContactType[] = [];
let contactsSerialNo = 1;

async function contactMenuInput(){

  const inputContact = await inquirer.prompt({
    type: 'list',
    name: 'contact',
    message: "Select your option",
    choices: ["Add Contact", "View Contacts", "Close Menu"]
  })

  let {contact} = inputContact; // desctructuring

  if(contact === "Add Contact") addContact();
  if(contact === "View Contacts") viewContact();
  if(contact === "Close Menu") console.log('\nThank You for using contact menu!')
};

contactMenuInput();


async function addContact(){
  const inputContactDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'personName',
      message: "Enter Person Name!"
    },
    {
      type: 'number',
      name: 'phoneNumber',
      message: 'Enter Contact Number'
    }
  ]);
  const {personName, phoneNumber} = inputContactDetails;

  contacts.push({ID: contactsSerialNo++, Name: personName, PhoneNo: phoneNumber});
  console.log(`\nNew Contact number has been added\n`)
  contactMenuInput();

}

function viewContact(){
  if(contacts.length > 0) contacts.forEach((user)=> 
  console.log(`${user.ID}. Person Name: ${user.Name} ---- Contact Number: ${user.PhoneNo}
`))
  else console.log('\nNo Contacts available!')
  contactMenuInput();
}