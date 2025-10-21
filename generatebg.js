import sharp from "sharp";
import fs from "fs";

const outputDir = "./images";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const inputPath = "images/bginput.png"; // change if needed

sharp(inputPath)
  .resize(67, 100, { fit: "fill" }) // width, height
  .toFile(`${outputDir}/bg.png`)
  .then(() => console.log("image saved as images/bg.png"))
  .catch(err => console.error("error:", err));