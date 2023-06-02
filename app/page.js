import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 m-4 justify-center items-center">
      <h1 className="text-2xl">Welcome to HJobR</h1>
      <div>The next best thing for recruiters and job applicants</div>
      <Link href="/login">
        <div className="absolute top-4 right-4 bg-gray-500 w-fit hover:bg-gray-300 flex gap-2 justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded">Login</div>
      </Link>
      <div className="flex justify-center gap-4 items-center">
        <Link href="/getstarted">
          <div className="bg-gray-500 w-fit hover:bg-gray-300 flex gap-2 justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded">Get Started</div>
        </Link>
        <Link href="/faq">
          <div className="bg-gray-500 w-fit hover:bg-gray-300 flex gap-2 justify-center items-center focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 m-2 rounded">FAQ</div>
        </Link>
        </div>
    </main>
  )
}
