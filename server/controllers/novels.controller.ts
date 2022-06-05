import DUMMY_DATA from './../data/dummy.data';
import { RESPONSE_STATUS_CODE } from './../const/express.const';
import { NextFunction, Request, Response } from 'express';


export function getAll( req:Request, res:Response, next:NextFunction) {
    try{
        res.status(RESPONSE_STATUS_CODE.OK).json( DUMMY_DATA );
    }catch(err) {
        console.error(`Error while getting all novels ${(err as Error).message}`);
        next(err);
    }
}

