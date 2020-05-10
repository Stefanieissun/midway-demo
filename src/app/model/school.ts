/*
 * @Author: Wang
 * @Description: 
 * @Date: 2020-05-10 11:26:50
 * @LastEditors: Wang
 * @LastEditTime: 2020-05-10 11:35:44
 */
import {Mongoose, Document, Model} from 'mongoose'
import {plugin, provide, scope, ScopeEnum} from 'midway'


interface Ischool extends Document{
    address:string,
    name:string,
}
@scope(ScopeEnum.Singleton)
@provide()

export class SchoolModel{
    mongoose: Mongoose
    model:Model<Ischool>

    constructor(@plugin('mongoose') mongoose:Mongoose){
        this.mongoose = mongoose;
        const schoolSchema=new this.mongoose.Schema({
            address:{type:String,required:true},
            name:{type:String,required:true}
        },{
            versionKey:false
        })
        this.model = this.mongoose.model('School',schoolSchema);
    }
}