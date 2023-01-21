const loadUsers = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
    .then(res => res.json())
    .then(data = console.log(data));
}
// const displayUsers = user => {
//     console.log(user);
// }