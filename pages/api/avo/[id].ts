import {NextApiRequest,NextApiResponse} from 'next'

import DB from '@database';

const allAvos = async (request:NextApiRequest,Response:NextApiResponse)=>{
    const db = new DB();
    const id = request.query.id;
    const avo = await db.getById(id as string);

    /*
    Response.statusCode = 200;
    Response.setHeader('Content-type','application/json');
    Response.end(JSON.stringify({data:entry}));
   */

    Response.status(200).json(avo);
}

export default allAvos
