const loadUsers = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayUsers(data.results[0]))
}
const displayUsers = user => {
    console.log(user);
}