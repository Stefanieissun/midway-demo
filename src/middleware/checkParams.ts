/*
 * @Author: Wang
 * @Description: 
 * @Date: 2020-05-10 14:41:18
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 15:40:41
 */
import {SchemaLike,validate} from 'joi'
import {Ictx} from '../util'
export function checkParam(schema:SchemaLike){
    return async (ctx:Ictx,next:()=>Promise<void>)=>{
        
        const params = {...ctx.request.body,...ctx.request.query,...ctx.params};
        
        console.log('params',params);
        const res = validate(params,schema);
        if(res.error){
            throw res.error;
        }
        ctx.state.params= res.value;
        await next();
    }
}