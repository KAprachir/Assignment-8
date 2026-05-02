"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { User, Camera } from "lucide-react";

const UpdateProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  if (isPending) return <div className="min-h-screen flex items-center justify-center"><span className="loading loading-spinner loading-lg text-primary"></span></div>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const onSubmit = async (formData) => {
    const { data, error } = await authClient.updateUser({
      name: formData.name,
      image: formData.image,
    });

    if (error) {
      toast.error(error.message || "Failed to update profile.");
      return;
    }

    toast.success("Profile updated successfully!");
    router.push("/my-profile");
    router.refresh();
  };

  return (
    <div className="min-h-[80vh] bg-base-200 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-base-300">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
              <User size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-black text-gray-900">
                Update Information
              </h1>
              <p className="text-gray-500 text-sm">
                Change your display name and profile picture
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Display Name</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  defaultValue={session.user.name}
                  className={`input input-bordered w-full pl-10 focus:input-primary ${
                    errors.name ? "input-error" : ""
                  }`}
                  {...register("name", { required: "Name is required" })}
                />
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              {errors.name && (
                <span className="text-error text-xs mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Image Field */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Photo URL</span>
              </label>
              <div className="relative">
                <input
                  type="url"
                  defaultValue={session.user.image || ""}
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full pl-10 focus:input-primary"
                  {...register("image")}
                />
                <Camera
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              <p className="text-[10px] text-gray-400 mt-1 px-1">
                Paste a link to your profile picture (e.g. from Imgur or Google Photos)
              </p>
            </div>

            <div className="pt-4 flex gap-3">
              <button
                type="button"
                onClick={() => router.back()}
                className="btn btn-ghost flex-1"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary flex-[2] shadow-lg shadow-primary/20"
              >
                {isSubmitting ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Update Information"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
