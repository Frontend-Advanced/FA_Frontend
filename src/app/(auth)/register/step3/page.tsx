import { Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CheckEmailPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full py-40">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold">Email Verified Successfully! <Check className="inline ms-4" size={48} /></h2>
                <p className="font-semibold text-secondary pe-6">
                    Thank you for verifying your email. You can now access all features.
                </p>
                <Link href="/">
                    <Button className="rounded-full px-6">Go Home</Button>
                </Link>
            </div>
        </div>
    )
}