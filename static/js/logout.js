import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


async function logout() {
    try {
        const response = await axios.post("/logout");

        if (response.status === 200) {
            window.location.href = "/login";
        }
        else {
            console.error("Logout Failed");
        }
    } catch (err) {
        console.error("Logout error");
    }

}


const logoutButton = document.querySelector("#logout");

logoutButton.addEventListener("click", logout);