import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const increaseBut = document.querySelector("#reset");

increaseBut.addEventListener("click", async () => {
    const response = await axios.post("/main/reset");
    const data = await response.data;
    console.log(response);
    document.querySelector("h3").textContent = data.num;
})