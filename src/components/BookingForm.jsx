"use client";
import { toast } from "react-toastify";

const BookingForm = ({ user }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    console.log("Booking Data:", data);
    
    toast.success("Booking Request Sent Successfully!");
    e.target.reset();
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 sticky top-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Book this Animal
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Full Name
          </label>
          <input
            name="name"
            type="text"
            defaultValue={user?.name}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            defaultValue={user?.email}
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="017XXXXXXXX"
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Shipping Address
          </label>
          <textarea
            name="address"
            rows={3}
            placeholder="House, Road, Area..."
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
            required
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-[0.98]"
          >
            Confirm Booking Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
