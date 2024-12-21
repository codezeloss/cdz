import Loader from "@/components/Loader";

export default function Loading() {
    return (
        <div
            className="fixed w-full h-screen flex items-center justify-center inset-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm z-50">
            <Loader/>
        </div>
    );
}