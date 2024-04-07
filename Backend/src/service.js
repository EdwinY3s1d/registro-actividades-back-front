const data = require('./mock_data.json');

module.exports = {
    getActvities: () => data,
    getUser: (id) => {
        let identificador=Number(id)
        let user=data.filter((person)=> person.id===identificador)[0];
        return user;
    },
    createUser : (dataUser) => {
        let newUser = {
            id: data.length + 1,
            ...dataUser
        }
        data.push(newUser);
        return newUser;
    },
    updateUser: (id, updatedUser) => {
        let identifier = Number(id);
        let index = data.findIndex((user) => user.id === identifier);

        if (index !== -1) {
            // If user is found, update the user
            data[index] = { ...data[index], ...updatedUser };
            return data[index];
        } else {
            // If user is not found, return null or handle accordingly
            return null;
        }
    },
    deleteUser: (id) => {
        let identifier = Number(id);
        let index = data.findIndex((user) => user.id === identifier);

        if (index !== -1) {
            // If user is found, remove the user from the array
            let deletedUser = data.splice(index, 1)[0];
            return deletedUser;
        } else {
            // If user is not found, return null or handle accordingly
            return null;
        }
    },
};