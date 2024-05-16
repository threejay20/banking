import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/icons/3jay-Horizon.png"
            alt="example"
            width={900}
            height={1200}
            className="max-w-1/2 h-auto rounded-l-xl object-contain border-4 border-[#333333]" // Dark gray border
          />
        </div>
      </div>
    </main>
  );
}
