import { generateApi } from "swagger-typescript-api";
import * as path from "path";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

generateApi({
  name: "covidAPIs",
  url: `${process.env.SWAGGER_JSON_DOCS}`,
  generateRouteTypes: false,
  generateClient: true,
  generateResponses: true,
  extractRequestParams: true,
  modular: true,
  enumNamesAsValues: true,
  moduleNameFirstTag: true,

  templates: path.resolve(process.cwd(), "scripts/codegen/template"),
})
  .then((files) => {
    files.files.forEach((file) => {
      const kebabCase = file.fileName
        .replace(/([a-z])([A-Z])/g, "$1-$2")
        .replace(/\s+/g, "-")
        .toLowerCase();

      const fileName = ["data-contracts", "http-client"].includes(kebabCase)
        ? `${kebabCase}.ts`
        : `${kebabCase}.service.ts`;

      writeFileSync(
        path.join(__dirname, `../../services/${fileName}`),
        file.fileContent,
      );
    });
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
