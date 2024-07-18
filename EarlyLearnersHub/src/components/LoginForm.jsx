const LoginForm = () => (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter your password"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
      >
        Login
      </button>
    </form>
  );
  
  export default LoginForm;