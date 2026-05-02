"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formData) => {
    const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.name,
      image: formData.photoURL,
      callbackURL: "/login",
    });

    if (error) {
      toast.error(error.message || "Registration failed. Please try again.");
      return;
    }

    toast.success("Account created successfully! Please login.");
    router.push("/login");
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-3xl font-black justify-center mb-2 text-primary">
            Register
          </h2>
          <p className="text-center text-sm text-base-content/60 mb-6">
            Create your account to start booking
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className={`input input-bordered w-full focus:input-primary ${
                  errors.name ? "input-error" : ""
                }`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-error text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                className={`input input-bordered w-full focus:input-primary ${
                  errors.email ? "input-error" : ""
                }`}
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

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered w-full focus:input-primary"
                {...register("photoURL")}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full focus:input-primary ${
                  errors.password ? "input-error" : ""
                }`}
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

            <div className="form-control mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full text-lg shadow-lg hover:shadow-primary/20"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Register"
                )}
              </button>
            </div>
          </form>

          <div className="divider text-xs uppercase text-base-content/40 font-bold my-6">
            OR REGISTER WITH
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline border-base-300 hover:bg-base-200 hover:text-base-content w-full gap-3 font-bold"
          >
            <FcGoogle size={24} />
            Google Account
          </button>

          <p className="text-center text-sm mt-8 text-base-content/70">
            Already have an account?{" "}
            <a href="/login" className="link link-primary font-bold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
