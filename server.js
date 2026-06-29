const express = require("express");
const path = require("path");
const app = express();
const PORT = 9191;
// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Public Folder Connect
app.use(express.static(path.join(__dirname, "public")));
// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Routes
app.get("/", (req, res) => {
    const banner = {
        fileType: "image",
        fileUrl: "/assist/bainar.png"
    };

    res.render("index", { banner });
});
// 404 Page
app.use((req, res) => {
    res.status(404).send("404 Page Not Found");
});
// Server Start
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});