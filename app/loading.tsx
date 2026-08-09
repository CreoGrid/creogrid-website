export default function Loading() {
    
    return (
        <div className="flex min-h-dvh items-center justify-center bg-background px-4">
            <div className="w-full max-w-sm rounded-2xl border border-border/70 bg-card p-8 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto h-3 w-24 animate-pulse rounded-full bg-muted" />
                <div className="mx-auto mt-4 h-3 w-40 animate-pulse rounded-full bg-muted" />
                <div className="mx-auto mt-8 h-10 w-full animate-pulse rounded-full bg-muted" />
            </div>
        </div>
    );
}
