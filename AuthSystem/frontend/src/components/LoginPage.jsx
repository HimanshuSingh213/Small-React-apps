import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

// export default function LoginPage(setIsLoggedIn, isLoggedIn) {
export default function LoginPage() {

  const [mode, setMode] = useState("login")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async () => {

    setError("");
    if (!email || !password) {
      setError("All fields required");
      return;
    }
    if (mode === "signup" && password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    try {
      setLoading(true);
      const url = mode === "login" ? "http://localhost:19400/login" : "http://localhost:19400/signup";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          body: JSON.stringify({
            email,
            password,
            name,
          })
        }
      });

      const data = await res.json();

      if (mode === "login") {
        // save token
        localStorage.setItem("token", data.token);

        // redirecting to dashboard
        navigate("/dashboard");
      } else {
        // after signup switching to login
        setMode("login");
      }
    } catch (err) {
      setError('Error Logging In.');

    }
    finally {
      setLoading(false);
    }

  }

  return (
    <div className="bg-gray-50 grid md:grid-cols-2 h-screen">

      {/* LEFT IMAGE PANEL */}
      <div className="hidden md:block">
        <img
          src="/upscaled image(cropped).png"
          alt="Sutra Art"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT LOGIN PANEL */}
      <div className="flex items-center flex-col justify-center px-6 gap-6">


        <div className="w-full max-w-md bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-8 space-y-6">

          {/* Tabs */}
          <div className="relative flex justify-center gap-10 border-b">

            <button
              onClick={() => setMode("login")}
              className={`pb-2 transition ${mode === "login" ? "text-[#f97316]" : "text-gray-400"}`}
            >
              Login
            </button>

            <button
              onClick={() => setMode("signup")}
              className={`pb-2 transition ${mode === "signup" ? "text-[#f97316]" : "text-gray-400"}`}
            >
              Sign Up
            </button>

            {/* Animated underline */}
            <span
              className="absolute bottom-0 h-[2px] w-12 bg-[#f97316] rounded-full transition-all duration-300 ease-in-out"
              style={{
                left: mode === "login" ? "calc(50% - 4.5rem)" : "calc(50% + 1rem)",
              }}
            />

          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-center">
            {mode === "signup"
              ? "Create an Account"
              : "Welcome Back"
            }
          </h2>


          {/* FORM */}
          <div
            key={mode}
            className="space-y-4 animate-[fade_.3s_ease-out] "
          >

            {mode === "signup" && (
              <input
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 px-4 bg-gray-100 rounded-xl outline-none border border-transparent focus:border-[#f97316] transition-all"
              />
            )}

            {mode === "signup" && (
              < input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 bg-gray-100 rounded-xl outline-none border border-transparent focus:border-[#f97316] transition-all"
              />
            )}
            {mode === "login" && (
              < input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 bg-gray-100 rounded-xl outline-none border border-transparent focus:border-[#f97316] transition-all"
              />
            )}

            {mode === "signup" && (
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

                className="w-full h-11 px-4 bg-gray-100 rounded-xl outline-none border border-transparent focus:border-[#f97316] transition-all"
              />
            )}
            {mode === "login" && (
              <input
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 bg-gray-100 rounded-xl outline-none border border-transparent focus:border-[#f97316] transition-all"
              />
            )}

            {mode === "login" && (
              <div className="text-sm text-right text-gray-500 cursor-pointer hover:text-[#f97316] transition duration-200 ease-in-out">
                Forgot Password?
              </div>
            )}

            {mode === "signup" && (
              <input
                placeholder="Confirm Password"
                type="password"
                className="w-full h-11 px-4 bg-gray-100 rounded-xl outline-none border border-transparent focus:border-[#f97316] transition-all"
              />
            )}


            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`w-full h-11 rounded-full text-white font-medium transition-all ${loading ? "bg-gray-500" : "bg-[#f97316] hover:bg-[#ea580c]"}`}
            >
              {loading ? "Please wait..." : mode === "signup" ? "Sign Up" : "Login"}
            </button>


            <div className="text-center text-sm text-gray-400">
              {mode === "signup"
                ? <div>
                  Already have an account?{"  "}

                  <span onClick={() => setMode("login")}
                    className="text-[#f97316] cursor-pointer">
                    Login
                  </span>
                </div>
                : <div>
                  New here?{"  "}

                  <span onClick={() => setMode("signup")}
                    className="text-[#f97316] cursor-pointer">
                    Create account
                  </span>
                </div>
              }
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

          </div>

        </div>
      </div>

    </div>
  )
}
