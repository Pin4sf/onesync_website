export default function DemoLoading() {
    return (
        <div className="min-h-screen py-10 md:py-24">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header Skeleton */}
                <div className="mb-12">
                    <div className="h-12 w-64 bg-obsidian-800 rounded-lg mb-4 animate-pulse"></div>
                    <div className="h-6 w-96 bg-obsidian-900 rounded animate-pulse"></div>
                </div>

                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar Skeleton */}
                    <div className="lg:col-span-1">
                        <div className="h-96 rounded-xl bg-obsidian-900/50 border border-white/5 animate-pulse"></div>
                    </div>

                    {/* Main Dashboard Skeleton */}
                    <div className="lg:col-span-3 space-y-6">
                        <div className="h-24 rounded-xl bg-obsidian-900/50 border border-white/5 animate-pulse"></div>
                        <div className="h-32 rounded-xl bg-obsidian-900/50 border border-white/5 animate-pulse"></div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-64 rounded-xl bg-obsidian-900/50 border border-white/5 animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
