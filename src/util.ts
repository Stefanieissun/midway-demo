/*
 * @Author: Wang
 * @Description: 
 * @Date: 2020-05-10 14:12:39
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 15:19:39
 */
import {inject,Context} from 'midway'
export interface Ictx extends Context{
    state:{
        /** 所以方法的参数都被挂载在这里 */
        params:any
    }
}
export class UtilService{
    @inject()
    ctx:Ictx

    demo(){
        this.ctx.state.params
    }
}