import { IncomingMessage,ServerResponse } from "http";
import DB from '@database';

const allAvos = async (request:IncomingMessage,Response:ServerResponse)=>{
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    Response.statusCode = 200
    Response.setHeader('Content-type','application/json')
    Response.end(JSON.stringify({data:allEntries,length}))
}

export default allAvos