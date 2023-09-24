import bcrypt from "bcrypt";
import fs from "fs";


const rawUserData = fs.readFileSync("./credentials.json");
//fs.readFileSync("credentials.json()")
const credentials = JSON.parse(rawUserData);


export function authenticate(username, password) {
    return new Promise((resolve, reject) => {
        if (username !== credentials.username) {
            resolve(false);
            return;
        }

        bcrypt.compare(password, credentials.password, (err, res) => {
            if (err) {
                console.error("error", err);
                resolve(false);
            }
            else {
                resolve(res);
            }
        })
    })
    
}
