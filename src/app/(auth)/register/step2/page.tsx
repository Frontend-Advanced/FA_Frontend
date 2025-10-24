import { Mail } from "lucide-react";

export default function CheckEmailPage() {
    return (
        <div className="flex flex-col items-center justify-center h-full py-40">
            <div className="">
                <h2 className="text-3xl font-bold mb-4">Check your email <Mail className="inline ms-4" size={48} /></h2>
                <p className="font-semibold text-secondary pe-6">
                    We sent a verification link to your email address. Please click the link to verify your account.
                </p>
            </div>
        </div>
    )
}