"use client";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (formdata) => {
    const { data, error } = await authClient.signIn.email({
      email: formdata.email,
      password: formdata.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Failed to login. Please check your credentials.");
      return;
    }

    toast.success("Login successful! Welcome back.");
    router.push("/");
    router.refresh();
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-300">
        <div className="card-body">
          <h2 className="card-title text-3xl font-black justify-center mb-2 text-primary">
            Login
          </h2>
          <p className="text-center text-sm text-base-content/60 mb-6">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                  "Login"
                )}
              </button>
            </div>
          </form>

          <div className="divider text-xs uppercase text-base-content/40 font-bold my-6">
            OR CONTINUE WITH
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
            Don't have an account?{" "}
            <a href="/register" className="link link-primary font-bold">
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
