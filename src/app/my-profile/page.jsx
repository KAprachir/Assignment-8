import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Edit, Mail, User } from "lucide-react";

const MyProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="min-h-[80vh] bg-base-200 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Cover Header */}
          <div className="h-32 bg-primary/10 relative"></div>

          {/* Profile Content */}
          <div className="px-8 pb-8">
            <div className="relative -mt-16 mb-6">
              <div className="inline-block p-2 bg-white rounded-full shadow-lg">
                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-base-200">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-primary/40">
                      <User size={64} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-black text-gray-900">
                  {user.name}
                </h1>
                <div className="flex items-center gap-2 text-gray-500 mt-1">
                  <Mail size={16} />
                  <span>{user.email}</span>
                </div>
              </div>

              <Link
                href="/my-profile/update"
                className="btn btn-primary gap-2 shadow-lg shadow-primary/20"
              >
                <Edit size={18} />
                Update Information
              </Link>
            </div>

            {/* Stats/Extra Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 border-t border-gray-100 pt-8">
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Member Since
                </p>
                <p className="font-bold text-gray-700">
                  {new Date(user.createdAt).toLocaleDateString("en-GB", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Account Type
                </p>
                <p className="font-bold text-gray-700">Premium Buyer</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Status
                </p>
                <p className="font-bold text-green-600">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
