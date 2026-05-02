export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center">
      <div className="relative">
        <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-12 h-12 border-4 border-secondary/20 border-b-secondary rounded-full animate-spin-slow"></div>
        </div>
      </div>
      <h2 className="mt-8 text-2xl font-bold text-gray-900 animate-pulse">
        Fetching Healthy Livestock...
      </h2>
      <p className="mt-2 text-gray-500">Please wait while we gather the best collection for you.</p>
    </div>
  );
}
