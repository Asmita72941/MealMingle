const OfflinePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
            <h1 className="text-3xl font-bold text-red-500 mb-4">
                ⚠️ You are offline!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Please check your internet connection and try again.
            </p>
            <button
                onClick={() => window.location.reload()}
                className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
                🔁 Retry
            </button>
        </div>
    );
};

export default OfflinePage;

