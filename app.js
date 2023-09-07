const express = require("express");
const app = express();
const PORT = 5000;
app.get("/api", async (req, res) => {
  const { slack_name, track } = req.query;
  const github_file_url =
    "https://github.com/LivingHopeDev/HNG-Task-1/blob/main/app.js";
  const github_repo_url = "https://github.com/LivingHopeDev/HNG-Task-1";
  const status_code = 200;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const current_day = days[date.getDay()];
  const utc_time = date.toISOString().slice(0, -5) + "Z";
  data = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code,
  };
  res.status(200).json(data);
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
