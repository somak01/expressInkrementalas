import {Router} from "express";


export const mainRouter = Router();


mainRouter.get("/", (req, res) => {

    if (!req.session.user) {
        res.status(301).redirect("/login");
    }
    else{

    
        res.render(
            "mainPage",
            {num:req.session.number}
        );
    }
});

mainRouter.post("/reset", (req, res, next) => {
    if (!req.session.user) {
        console.log("nem kene hogy mukodjon a gomb!");
        //res.redirect("/login");
        next();
    }
    req.session.number = 1;
    res.json({num:req.session.number});
});

mainRouter.post("/increase", (req, res, next) => {
    if (!req.session.user) {
        console.log("nem kene hogy mukodjon a gomb!");
        res.send("/login")
    }
    req.session.number++;
    res.json({num:req.session.number});
})