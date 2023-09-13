const readline = require('node:readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    crlfDelay: Infinity
})

const { default: select } = require('@inquirer/select');
const { default: input } = require('@inquirer/input');
const { default: confirm } = require('@inquirer/confirm');
//Create a function to create a user

async function create() {
    console.log("Creating user \n")
    const value = await input({ message: `Enter the name: ` })

    const res = await fetch("http://localhost/hng-internship/stage2/", {
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
    const res = await fetch(`http://localhost/hng-internship/stage2/?id=${id}`, {
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

    const res = await fetch("http://localhost/hng-internship/stage2/", {
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
    const res = await fetch(`http://localhost/hng-internship/stage2/?id=${id}`, {
        method: "DELETE",
    });
    const text = await res.text();
    console.log(text, '\n');
    // console.log(res)
}

async function main() {
    await create()
    await read()
    await update()
    await delete_user()
}

main()