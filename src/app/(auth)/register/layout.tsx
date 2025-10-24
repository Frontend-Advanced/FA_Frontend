export default function RegisterLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-32">
            <div className="">
                {children}
            </div>
            <div className="hidden lg:block">
                <img src="/image/auth-bg.png" alt="Description" />
            </div>
        </div>
    );
}