var swaggerJSdocs = require('swagger-jsdoc')
var swaggerUI = require('swagger-ui-express')//to visualize doc

var swaggerDefinition={
    info:{                 // API informations (required)
        title:'hello world',           // Title (required)
        virsion:'1.0.0',            // Version (required)
        description:'this xyz'  // Description (optional)
    },

    host:'localhost:3333',  // Host (optional)
    basePath:'/'            // Base path (optional)
}

var swaggerOptions={
    swaggerDefinition,
    apis:['./index.js']
}

var swaggerSepcs = swaggerJSdocs(swaggerOptions);

app1.use('/api-docs',swaggerUI.server,swaggerUI.setup());