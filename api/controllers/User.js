import User from "../models/User.js"



export const createUser = async (req, res) => {
        const newUser = new User(req.body);
        console.log(req.body);
        try {
            const savedUser = await newUser.save()
            return res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err);
        }
}


export const updateUser = async (req, res, next) => {
    const userData = req.body;
    try {
        const result = await User.findOneAndUpdate({"username": userData['username']}, userData);
        return await res.send(result == null ? "Invalid User":userData);
    } catch (err) {
        res.status(500).json(err);

    }
}

export const deleteUser = async (req, res) => {

    try {
        const result = await User.findOneAndDelete(req.body);
        return await res.send(result == null ? "Invalid User": "User is deleted");
    } catch (err) {
        res.status(500).json(err)

    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.query.username }); // Use req.query.username to access the query parameter
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getStudents = async (req, res) => {

    try {
        await User.find()
        .then(users => {
            users = users.filter(ele => ele.isadmin === false);
            res.status(200).json(users);
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getStudentCount = async (req, res) => {
    try {
        const studentsCount = await User.countDocuments({ isadmin: false });
        res.status(200).json({ count: studentsCount });
    } catch (err) {
        res.status(500).json(err);
    }
}
