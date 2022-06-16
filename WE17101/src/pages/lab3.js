const Users = {
        render: async() => {
                const response = await fetch('https://6291d2a0cd0c91932b6886a8.mockapi.io/user');

                console.log('response', response);

                const users = await response.json();
                console.log('students', users);

                return `<div>
${
students.map((user) => (
    `<div>
        <div>ID: ${user.id}</div>
        <div>Name: ${user.name}</div>
        <div>MSV: ${user.msv}</div>
    </div>`
))
}
</div>`
},
}
export default Users