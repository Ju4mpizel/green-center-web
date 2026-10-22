// convert-webp.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";

const directories = ["public/img/variados"];

async function processImages() {
  for (const dir of directories) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i) && !file.includes("logo")) {
        const inputPath = path.join(dir, file);
        const parsed = path.parse(file);
        const outputPath = path.join(dir, `${parsed.name}.webp`);

        console.log(`Optimizando: ${inputPath} -> ${outputPath}`);
        await sharp(inputPath)
          .resize({ width: 1200, withoutEnlargement: true }) // Resolución máxima ideal
          .webp({ quality: 80 }) // Calidad óptima reduciendo ~90% de peso
          .toFile(outputPath);
      }
    }
  }
  console.log("¡Conversión completada con éxito!");
}

processImages();
