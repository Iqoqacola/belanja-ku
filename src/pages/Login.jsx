import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] text-white px-4">
      <div className="w-full max-w-sm bg-[#1E1E1E] p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              placeholder="email@example.com"
              className="w-full px-4 py-2 rounded-md bg-[#2A2A2A] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-[#2A2A2A] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-color hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Belum punya akun?{" "}
          <Link className="text-orange-400 hover:underline" to={"/register"}>
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
