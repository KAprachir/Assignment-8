"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  // Initialize the hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle form submission
  const onSubmit = async (formData) => {
    const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name, // Pass directly
      image: formData.photoURL, // Better Auth uses 'image' key
      callbackURL: "/animals",
    });

    if (error) {
      // This will tell you EXACTLY why it's not submitting
      console.error("Submission failed:", error.message);
      return;
    }

    console.log("Success:", data);
  };

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

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className={`input input-bordered w-full focus:input-primary ${errors.name ? "input-error" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-error text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control w-full mt-4">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className={`input input-bordered w-full focus:input-primary ${errors.email ? "input-error" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-error text-xs mt-1">
                  {errors.email.message}
                </span>
              )}
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
                {...register("photoURL")}
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
                className={`input input-bordered w-full focus:input-primary ${errors.password ? "input-error" : ""}`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-error text-xs mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Register Button */}
            <div className="form-control mt-8">
              <button type="submit" className="btn btn-primary w-full text-lg">
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
