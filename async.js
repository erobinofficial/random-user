const loadUsers = () => {
    const url = `https://randomuser.me/api/?gender=female`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data.results[0]));
}

const loadUsersAsync = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUsers(data.results[0].name.first);
    }
    catch (error) {
        console.log(error);        
    }
}
const displayUsers = user => {
    console.log(user);
}