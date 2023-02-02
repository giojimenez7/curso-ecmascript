const user = { username: 'gio', age: 32, country: 'CO' };
const { username, ...values } = user;
console.log(username);
console.log(values);
