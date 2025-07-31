import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, phone, password, role, roll, teacherId } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const image = req.file ? req.file.filename : null;

    const newUser = new User({
      fullName,
      email,
      phone,
      password: hashedPassword,
      role,
      roll: role === "student" ? roll : undefined,
      teacherId: role === "teacher" ? teacherId : undefined,
      image,
    });

    await newUser.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "SECRET", { expiresIn: "7d" });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
