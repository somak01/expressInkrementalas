import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


const form = document.querySelector("#loginForm");

export default function submission() {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const username = document.querySelector("[name='username']").value;
        const password = document.querySelector("[name='pwd']").value;

        try{
            const response = await axios.post("/login", {username, password});
            //console.log(response.password, response.username);
            console.log(response);
            window.location.href = "/main";
        } catch (err) {
            console.log("Error: ", err);
            window.location.href = "/login";
        }
    })
}