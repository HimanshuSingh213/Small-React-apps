import user from "../models/user.model";

export default handleUserSignUp = async (req, res) => {
    const {name, email, password} = req.body;

    const newUser = await user.create({
        name: name,
        email: email,
        password: hashedPassword(password)
    });

}