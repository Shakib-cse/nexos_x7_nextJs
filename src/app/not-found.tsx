import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-foreground text-background space-y-4">
            <h1 className="text-9xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold">Page Not Found</h2>
            <p className="text-background/70 text-center max-w-md">
                The page you are looking for might have been removed, had its name changed, or is
                temporarily unavailable.
            </p>
            <Link href="/">
                <Button variant="default" size="lg" className="mt-4 cursor-pointer">
                    Go back home
                </Button>
            </Link>
        </div>
    );
}