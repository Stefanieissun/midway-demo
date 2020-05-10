/*
 * @Author: Wang
 * @Description:
 * @Date: 2020-05-09 23:33:39
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 15:41:02
 */
import {checkParam} from '../../middleware/checkParams'
import { controller, get, inject, provide,plugin } from 'midway';
// import {inject} from 'midway'
import { IUserService } from '../../interface';
import { DemoModel } from '../model/demo';
import { SchoolModel } from '../model/school'
import {Mongoose } from 'mongoose';
import * as Joi from 'joi'
import {Ictx} from '../../util'
@provide()
@controller('/user')
export class UserController {

  @inject()
  ctx: Ictx;

  @plugin()
  mongoose:Mongoose

  @inject()
  demoModel: DemoModel;

  @inject()
  schoolModel:SchoolModel;

  @inject('userService')
  service: IUserService;

  @get('/:id',{middleware:[checkParam({id:Joi.string().required()})]})
  // @get('/:id')
  async getUser(): Promise<void> {
    // console.log(this.ctx.request,this.ctx.params,this.ctx.request.query);
    let  transaction = await this.mongoose.startSession();
    transaction.startTransaction();
    
    try {
      // await this.demoModel.model.insertMany({user:'A',name:'S'});
      const {n} = await this.demoModel.model.updateOne({user:'AS'},{$set:{name:"233"}});
     if(n<1){
      await transaction.abortTransaction();
      await transaction.endSession();
      this.ctx.status = 500;
      return;    
     }
      await this.schoolModel.model.insertMany({address:"2",name:"school"});
      await transaction.commitTransaction();
      this.ctx.status = 200;
    } catch (error) {
      console.log('chucuole')
     await transaction.abortTransaction();
     await transaction.endSession();
      throw error;
    }
    finally{
      transaction.endSession();
    }
  }
}
