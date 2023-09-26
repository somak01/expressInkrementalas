import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';

const increaseBut = document.querySelector("#increase");


increaseBut.addEventListener("click", async () => {
    const response = await axios.get("/main/increase").catch(function (error){
        if (error.response) {
            window.location.href = "/login";
            console.log(error.response.data);
            
        }
    });
    const data = await response.data;
    console.log(response);
    document.querySelector("h3").textContent = data.num;
})