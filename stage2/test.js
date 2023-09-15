const readline = require('node:readline/promises');
const figlet = require('figlet')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    crlfDelay: Infinity
})

const { default: select } = require('@inquirer/select');
const { default: input } = require('@inquirer/input');
const { default: confirm } = require('@inquirer/confirm');
//Create a function to create a user

const API_ENDPOINT = 'https://austin-ofqg.onrender.com/api.php'

async function create() {
    console.log("Creating user \n")
    const value = await input({ message: `Enter the name: ` })

    const res = await fetch(API_ENDPOINT, {
        method: "POST",
        body: JSON.stringify({ name: value }),
    });
    const text = await res.text();
    console.log(text, '\n');
    // console.log(res)
}

// Create a function to read a user
async function read() {
    console.log("Reading user \n")
    const id = await input({ message: `Enter the ID of the user: ` })
    const res = await fetch(`${API_ENDPOINT}?id=${id}`, {
        method: "GET",
    });
    const text = await res.text();
    console.log(text, '\n');
    // console.log(res)
}

// Create a function to update a user
async function update() {
    console.log("Updating user \n")

    const id = await input({ message: `Enter the id of the user you want to update: \n` })
    const value = await input({ message: `Enter the new name of the user: ` })

    const res = await fetch(API_ENDPOINT, {
        method: "PUT",
        body: JSON.stringify({ id, name: value }),
    });
    const text = await res.text();
    console.log(text, '\n');

    // console.log(res)
}

// Create a function to delete a user
async function delete_user() {
    console.log("Delete user \n")
    const id = await input({ message: `Enter the id of the user you want to delete: ` })
    const res = await fetch(`${API_ENDPOINT}?id=${id}`, {
        method: "DELETE",
    });
    const text = await res.text();
    console.log(text, '\n');
    // console.log(res)
}

function showBanner() {
    console.log(figlet.textSync("User Manager"))
}

async function main() {
    let shouldContinue = true
    showBanner()
    do {
        const userSelection = await select({
            message: "Select an option", choices: [
                {
                    name: 'Create user',
                    value: 'createUser',
                    description: 'Create a new user account',
                },
                {
                    name: 'Fetch user by ID',
                    value: 'fetchUserById',
                    description: 'Fetch a user account by ID',
                },
                {
                    name: 'Update user by ID',
                    value: 'updateUserById',
                    description: 'Update a user account by ID',
                },
                {
                    name: 'Delete user by ID',
                    value: 'deleteUserById',
                    description: 'Delete a user account by ID',
                }
            ]
        })
        switch (userSelection) {
            case 'createUser': {
                await create()
                break;
            }
            case 'fetchUserById': {
                await read()
                break
            }
            case 'updateUserById': {
                await update()
                break
            }
            case 'deleteUserById': {
                await delete_user()
                break
            }
        }
        shouldContinue = await confirm({ message: "Do you wish to continue?" })
    } while (shouldContinue);
}

main()