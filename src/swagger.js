const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui")

const options={
    definition: {
        openapi: "3.0.0",
        info: {title: 'APISNODEJS-RE',version: '1.0.0'
    },
    apis: ['./routes/*.js','./models/*.js',]
    }
}

const swaggerSpec = swaggerJsDoc(options)

const swaggerDocs=(app,port)=>{
    app.use('api/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec,port))
    app.get('/api/docs',(req, res)=>{
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
    console.log(
        `Version 1: Docs are available at http://144.22.59.87:${port}/api/docs`
    )
};
module.exports={swaggerDocs}