/*
 * @Author: Wang
 * @Description:
 * @Date: 2020-05-09 23:33:39
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 00:11:45
 */
import { EggPlugin } from 'midway';
export default {
  static: true, // default is true
  mongoose: {
    enable: true,
    package: 'egg-mongoose'
  }
} as EggPlugin;
