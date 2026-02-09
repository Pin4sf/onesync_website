"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-light-bg flex items-center justify-center">
            <div className="text-center max-w-md px-4">
                <h2 className="text-xl text-text-dark font-light mb-2">Something went wrong</h2>
                <p className="text-sm text-text-dark-muted font-light mb-6">
                    {error.message || "An unexpected error occurred."}
                </p>
                <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald text-white font-light rounded-full hover:bg-emerald-light transition-colors text-sm"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
