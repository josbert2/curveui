import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start gap-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">FlyonUI Test - Hot Reload</h1>
          <p className="text-sm text-gray-600">
            Edita <code className="bg-gray-100 px-2 py-1 rounded">/packages/flyonui/src/components/button.css</code> y ve los cambios en vivo!
          </p>
          
          <div className="flex flex-wrap gap-2">
            <button className="btn">Button</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-link">Link</button>
            <button className="btn-camilita-2">Test Button (cambia el color en el CSS!)</button>
          </div>
        </div>
      </main>
    </div>
  );
}
