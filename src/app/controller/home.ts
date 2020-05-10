/*
 * @Author: Wang
 * @Description: 
 * @Date: 2020-05-10 13:52:46
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 14:23:03
 */
import { Context, inject, controller, get, provide } from 'midway';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @get('/')
  async index() {
    this.ctx.body = `Welcome to midwayjs!`;
  }
}
