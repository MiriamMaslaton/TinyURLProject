import mongoose from "mongoose"

const LinkSchema = mongoose.Schema({
    id: Number,
    originalUrl: String,
    clicks: Array,
    targetParamName:
    {
        type: String,
        default: "t"
    },
    targetValues:
    {
        type: Array,
        default: [{ id: 0, name: "Email", value: 0 },
        { id: 1, name: "Whatsapp", value: 0 },
        { id: 2, name: "Websites", value: 0 }
        ]
    }

})

export default mongoose.model("links", LinkSchema)