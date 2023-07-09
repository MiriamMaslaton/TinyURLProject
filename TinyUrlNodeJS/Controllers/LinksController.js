import LinkModel from "../Models/LinkModel.js"

const LinksController = {
    getList: async (req, res) => {
        try {
            const links = await LinkModel.find();
            res.json({ links })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    getById: async (req, res) => {
        try {
            const link = await LinkModel.findOne({ id: req.params.id })
            if (req.query[link.targetParamName] !== undefined) {
                link.clicks = [...link.clicks, { "id": link.clicks.length, "insertedAt": new Date(), "ipAddress": req.ip, "targetParamValue": req.query[link.targetParamName] }]
                link.targetValues[req.query[link.targetParamName] - 1].value++
            }
            else {
                link.clicks = [...link.clicks, { "id": link.clicks.length, "insertedAt": new Date(), "ipAddress": req.ip }]
            }
            await LinkModel.findOneAndUpdate({ id: req.params.id }, link, { new: true })
            res.redirect(link.originalUrl)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    addLink: async (req, res) => {
        const obj = req.body
        try {
            const newLink = await LinkModel.create(obj)
            res.json(newLink)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    updateLink: async (req, res) => {
        const { id } = req.params
        try {
            const updatedLink = await LinkModel.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedLink)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    deleteLink: async (req, res) => {
        const { id } = req.params
        try {
            const deletedLink = await LinkModel.findByIdAndDelete(id)
            res.json(deletedLink)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    decodeData: async (req, res) => {
        try {
            const link = await LinkModel.findOne({ id: req.params.id })
            res.json(link.targetValues)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}
export default LinksController;