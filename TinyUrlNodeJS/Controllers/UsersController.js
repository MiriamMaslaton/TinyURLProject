import UserModel from "../Models/UserModel.js"

const UsersController = {
    getList: async (req, res) => {
        try {
            console.log(req.query.status)
            const users = await UserModel.find();
            res.json({ users })
        } catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    getById: async (req, res) => {
        console.log(req.params.id)
        try {
            const user = await UserModel.findOne({ id: req.params.id })
            res.json(user)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    addUser: async (req, res) => {
        const obj = req.body
        try {
            const newUser = await UserModel.create(obj)
            res.json(newUser)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedUser)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params
        try {
            const deletedUser = await UserModel.findByIdAndDelete(id)
            res.json(deletedUser)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    },
    login: async (req, res) => {
        const obj = req.body
        console.log(obj)
        try {
            const user = await UserModel.findOne({ email: obj.email,password: obj.password })
            console.log(user)
            if (user !== null)
                res.json(user)
            else
                res.json(false)
        }
        catch (e) {
            res.status(400).json({ message: e.message })
        }
    }
}
export default UsersController;