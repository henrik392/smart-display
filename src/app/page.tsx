import ElectricityPrice from "@/components/ElectricityPrice";
import Tavla from "@/components/Tavla";
import Widget from "@/components/Widget";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start bg-[#121212] text-white px-12 py-8">
      <header className="mb-6">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Kringsjåvegen <span className="text-[#FF5959]">61</span>
        </h1>
      </header>

      {/* Grid that expands to the remaining space left on the screen, both width and heigh */}
      <div className="grid md:grid-cols-2 gap-6 flex-1 w-full h-full">
        <Widget>
          <Tavla />
        </Widget>
        <Widget title="⚡ Strømpris">
          <ElectricityPrice />
        </Widget>
      </div>
    </main>
  );
}
