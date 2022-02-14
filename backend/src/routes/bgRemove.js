const router = require("express").Router();
const axios = require("axios");
const FormData = require("form-data");

const formData = new FormData();
formData.append("size", "auto");

router.post("/bgremover", async (req, res) => {
  const { base64Image } = req.body;
  const imageData = base64Image.substring(base64Image.indexOf(",") + 1);
  formData.append("image_file_b64", imageData);

  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: {
      image_file_b64: imageData,
    },
    responseType: "json",
    headers: {
      "X-Api-Key": process.env.BGR_API,
      Accept: "application/json",
    },
  })
    .then((response) => {
      return res.json({ image: response.data.data.result_b64 });
    })
    .catch((error) => {
      console.error("Request failed:");
      return res.end();
    });
});

module.exports = router;
