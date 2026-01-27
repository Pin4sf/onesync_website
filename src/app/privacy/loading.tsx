export default function PrivacyLoading() {
    return (
        <div className="min-h-screen py-10 md:py-24">
            <div className="container-xl">
                {/* Hero Skeleton */}
                <div className="max-w-4xl mb-16 animate-pulse">
                    <div className="h-12 w-64 bg-obsidian-800 rounded-lg mb-4"></div>
                    <div className="h-6 w-96 bg-obsidian-900 rounded mb-2"></div>
                    <div className="h-6 w-80 bg-obsidian-900 rounded"></div>
                </div>

                {/* Data Categories Skeleton */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    <div className="h-64 rounded-xl bg-obsidian-900/50 border border-white/5 animate-pulse"></div>
                    <div className="h-64 rounded-xl bg-obsidian-900/50 border border-white/5 animate-pulse"></div>
                </div>

                {/* Consent Model Skeleton */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-48 rounded-xl bg-obsidian-900/50 border border-white/5 animate-pulse"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
