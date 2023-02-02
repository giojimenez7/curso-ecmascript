function newUser(name, age, country) {
    var name = name || 'Giovanny';
    var age = age || 32;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'MX');

function newAdmin(name = 'Giovanny', age = 36, country = 'CL') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');