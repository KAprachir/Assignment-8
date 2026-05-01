import React from "react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold justify-center mb-2">
            Create Account
          </h2>
          <p className="text-center text-sm text-base-content/70 mb-4">
            Join us today!
          </p>

          <form>
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

            {/* Email Field */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com"
                className="input input-bordered w-full focus:input-primary"
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:input-primary"
                required
              />
            </div>

            {/* Register Button */}
            <div className="form-control mt-8">
              <button className="btn btn-primary w-full text-lg">
                Register
              </button>
            </div>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <a href="/login" className="link link-primary font-semibold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
