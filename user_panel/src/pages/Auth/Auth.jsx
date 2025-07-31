import { useState } from "react";
import axios from "axios";
import "./Auth.css";
import { url } from "../../assets/assets";

const Auth = ({ onClose, onSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "student",
    roll: "",
    teacherId: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await axios.post(`${url}/api/auth/login`, {
          email: form.email,
          password: form.password,
        });

        console.log("✅ Login Success:", res.data);
        if (onSuccess) {
          onSuccess(res.data.user); // ✅ এইটা এখন ঠিক
        }
      } else {
        const data = new FormData();
        Object.entries(form).forEach(([key, value]) => {
          if (value) data.append(key, value);
        });

        const res = await axios.post(`${url}/api/auth/register`, data);
        console.log("✅ Registration Success:", res.data);
        alert("Registration successful! You can now log in.");
        setIsLogin(true);
      }
    } catch (err) {
      console.error("❌ Auth Error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Something went wrong!");
    }
  };

  return (
    <div className="auth-container">
      {/* ❌ Modal Close Button */}
      <button onClick={onClose} className="auth-close-btn">❌</button>

      <h2>{isLogin ? "Login" : "Register"}</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <select name="role" onChange={handleChange}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="visitor">Visitor</option>
            </select>
            {form.role === "student" && (
              <input
                type="text"
                name="roll"
                placeholder="Student Roll"
                onChange={handleChange}
                required
              />
            )}
            {form.role === "teacher" && (
              <input
                type="text"
                name="teacherId"
                placeholder="Teacher ID"
                onChange={handleChange}
                required
              />
            )}
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>

      <p className="toggle-auth">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </span>
      </p>
    </div>
  );
};

export default Auth;
