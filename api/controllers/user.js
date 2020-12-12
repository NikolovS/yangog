const { userModel } = require('../models');

function getUser(req, res, next) {
    const { id } = req.params;
    userModel.findOne({ _id: id })
        .then(user => res.json(user))
        .catch(next);
}

function listUsers(req, res, next) {
    userModel.find()
        .populate('paintings')
        .populate('payments')
        .then(users => res.json(users))
        .catch(next);
}

function createUser(req, res, next) {
    const { username, email, password, phone } = req.body;
    const { _id: userId } = req.user;

    userModel.create({ userId, username, email, password, phone, isAdmin })
        .then(user => {
            res.status(200).json(user)
        })
        .catch(next);
}

async function updateUser(req, res, next) {
    const { id } = req.params;
    const { username, email, phone } = req.body;
    await userModel.updateOne({ _id: id }, { username, email, phone })
    const updatedUser = await userModel.findOne({ _id: id })
    res.status(200).json(updatedUser)


}

function deleteUser(req, res, next) {
    const { id } = req.params;
    //const { _id: userId } = req.user;
    userModel.findByIdAndDelete({ _id: id })
        .then(deletedUser => {
            res.status(200).json(deletedUser)
        })
        .catch(next);
}

async function changePassword(req, res, next) {
    const { new_password } = req.body;
    const { id } = req.params;
    const { _id: userId } = req.user;

    let loggedInUser = await userModel.findById(userId)
    let user = await userModel.findOne({ _id: id })

    if (
        (loggedInUser && loggedInUser.isAdmin)
        || (loggedInUser._id.equals(user._id))
    ) {
        user.password = new_password;
        user.save().then((user) => {
            res.json(user);
        }).catch((err) => {
            next(err)
        });
    } else {
        res.status(401).json({ status: 'Unauthorized' });
    }
}

module.exports = {
    getUser,
    listUsers,
    createUser,
    updateUser,
    deleteUser,
    changePassword
}
