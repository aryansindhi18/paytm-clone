import swaggerUI from "swagger-ui-express"
import { fileURLToPath } from 'url';
import path from "path"
import YAML from "yamljs"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const swaggerJSDocs = YAML.load(path.join(__dirname, 'api.yaml'));

const options = {
    customCss:
      '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
    customSiteTitle: "API docs - Paytm-Clone ~AryanSindhi"
}; 

const JWT_SECRET = "aryansindhi18";

// module.exports = { swaggerServe: swaggerUI.serve, swaggerSetup: swaggerUI.setup(swaggerJSDocs,options) };

export const swaggerServe = swaggerUI.serve;
export const swaggerSetup = swaggerUI.setup(swaggerJSDocs, options);

export default JWT_SECRET