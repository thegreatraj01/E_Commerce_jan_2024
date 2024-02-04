import generateToken from "../extrafunction/genratetoken.js";
import User from "../models/usermode.js";


const signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const userExists = await User.findOne({ email });

        // If user already exists, return an error; otherwise, create the user
        if (userExists) {
            return res.status(400).json({ message: 'user already exists' })
        }
        const user = await User.create({
            name,
            email,
            password,
        });

        // If user is created, generate a token and send user info
        if (user) {
            const token = generateToken(user._id);
            res.status(201).json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                },
                token: token
            });
        }
    } catch (error) {
        console.error('user signup error', error);
        res.status(500).json({ massege: 'signup error', error: error })
    }
}


const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(403).send('all fields are required');
    }
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).send('user not found with this email');
        }

        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user._id);
            res.status(200).json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                },
                token: token
            });
        } else {
            res.status(401).send('user not found with this email or password not matched');
        }

    } catch (error) {
        res.status(500).json({ message: "internal error", error: error });
    }
};


export { signup, login };