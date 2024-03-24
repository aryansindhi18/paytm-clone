import express from "express"
import cors from "cors"
import router from "./routes/index.js"
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from"swagger-ui-express";
import path from "path"
import { swaggerServe, swaggerSetup } from './config.js'  

const app = express();
app.use(cors());
app.use(express.json())
app.use("/api-docs", swaggerServe, swaggerSetup); 


/*const options = {
    customCss:
      '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
    customCssUrl:
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css',
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js',
    ],
    definition: {
        openapi: "3.0.0",
        info: {
            title:"Share2Pay",
            version: "1.0.0"
        },
        servers: [
            {
                url:"http://localhost:3000"
            }
        ],
        components: {
            securitySchemes: {
              bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
              },
            },
          },
          security: [{ bearerAuth: [] }]
    },
    apis: [path.join(process.cwd(),"./index.js"),path.join(process.cwd(),"./routes/index.js"),path.join(process.cwd(),"./routes/account.js"),path.join(process.cwd(),"./routes/user.js")]
}

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));*/

/**
 * @swagger
 * /:
 *  get:
 *      summary: Basic Health checkup route
 *      description: Basic route to check if backend is up or not
 *      responses:
 *          200:
 *              description: Backend System up... 
 */
app.get('/',(req,res)=>{
    res.json({msg:"hello from backend/inde.js"})
})

app.use("/api/v1",router)

app.listen(3000,()=>{
    console.log(`server up and running on 3000`)
})
