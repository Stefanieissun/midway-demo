/*
 * @Author: Wang
 * @Description:
 * @Date: 2020-05-09 23:33:39
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 11:05:40
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'midway';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_{{keys}}';

  // add your config here
  config.middleware = [
  ];
  config.mongoose = {
   url: 'mongodb://127.0.0.1/website'
 };
  return config;
};
