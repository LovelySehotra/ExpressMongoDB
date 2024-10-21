import express from "express";


export type AppConfig={
    port?:number |string;
}

export class Server{
    private app;
    private config:AppConfig;
    constructor (config:AppConfig){
        this.config = config
        this.app = express();
    }
    start(){
        const port = this.config.port ?? 1209;
        this.app.listen(port,()=>{
            console.log("Yes i am working")
        })

    }
}