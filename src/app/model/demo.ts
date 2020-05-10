/*
 * @Author: Wang
 * @Description:
 * @Date: 2020-05-09 23:44:04
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 11:52:55
 */
import {Mongoose, Document, Model} from 'mongoose';
import {plugin, provide, scope, ScopeEnum} from 'midway';

interface Idem extends Document {
    user?: string;
    name?: string;
    age?: number;
}
@scope(ScopeEnum.Singleton)
@provide()
export class DemoModel {

    mongoose: Mongoose;

    model: Model<Idem>;
     constructor(@plugin('mongoose') mongoose: Mongoose) {
        this.mongoose = mongoose;
        const demoSchema = new this.mongoose.Schema({
            user: {type: String, required: true},
            name: {type: String, required: true},
            age:  {type: String, required: true}
        },{
            versionKey:false
        });


        this.model = this.mongoose.model('Demo', demoSchema);
    }
}