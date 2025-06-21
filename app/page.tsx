export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 leading-tight">
        Why are you still losing money?
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 text-center mb-10 max-w-2xl">
        SubZero scans your inbox, finds active subscriptions, and helps you cancel the ones you don't want — instantly.
      </p>
      <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl text-lg hover:bg-gray-300 transition">
        Scan My Subscriptions
      </button>
    </main>
  )
}
