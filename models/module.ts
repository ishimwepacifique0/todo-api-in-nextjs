import mongoose,{Schema} from "mongoose"

const moduleSchema =  new Schema({
    title:String,
    description:String
},{
    timestamps: true,
})

const Topic = mongoose.models.Topic || mongoose.model("Topic",moduleSchema)
export default Topic