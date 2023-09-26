

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        location.reload();
    }
})