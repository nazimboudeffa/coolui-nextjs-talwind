import { Montserrat } from "next/font/google"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
    <header className="flex flex-col items-center gap-10 text-center mt-10 mb-10">
        <h1
            className={`text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl Montserrat`}
        >
            Welcome to CoolUI
        </h1>
        <p className="max-w-[500px] text-lg text-muted-foreground sm:text-xl">
            Explore some TailWind components and start building your next project.
        </p>
    </header>
    <main className="mx-auto max-w-screen-xl px-4 pb-8 lg:pb-12 space-y-8">
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <Link href="/hero">
          <li key="1">
            <div className="relative block h-full bg-white">
              <div className="rounded-md h-full border-2 border-gray-900 bg-white transition hover:-translate-y-2">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                      📣
                    </span>
                  </div>

                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Hero</h2>

                  <p className="mt-1 text-sm text-gray-700">Working</p>
                </div>
              </div>
            </div>
          </li>
        </Link>
          <li key="1">
            <div className="group relative block h-full bg-white">
              <div className="rounded-md h-full border-2 border-gray-900 bg-white">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                      🥲
                    </span>
                  </div>

                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Component</h2>

                  <p className="mt-1 text-sm text-gray-700">TODO</p>
                </div>
              </div>
            </div>
          </li>
          <li key="1">
            <div className="group relative block h-full bg-white">
              <div className="rounded-md h-full border-2 border-gray-900 bg-white">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                      🥲
                    </span>
                  </div>

                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Component</h2>

                  <p className="mt-1 text-sm text-gray-700">TODO</p>
                </div>
              </div>
            </div>
          </li>
          <li key="1">
            <div className="group relative block h-full bg-white">
              <div className="rounded-md h-full border-2 border-gray-900 bg-white">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                      🥲
                    </span>
                  </div>

                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Component</h2>

                  <p className="mt-1 text-sm text-gray-700">TODO</p>
                </div>
              </div>
            </div>
          </li>
          <li key="1">
            <div className="group relative block h-full bg-white">
              <div className="rounded-md h-full border-2 border-gray-900 bg-white">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                      🥲
                    </span>
                  </div>

                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Component</h2>

                  <p className="mt-1 text-sm text-gray-700">TODO</p>
                </div>
              </div>
            </div>
          </li>
          <li key="1">
            <div className="group relative block h-full bg-white">
              <div className="rounded-md h-full border-2 border-gray-900 bg-white">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                      🥲
                    </span>
                  </div>

                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Component</h2>

                  <p className="mt-1 text-sm text-gray-700">TODO</p>
                </div>
              </div>
            </div>
          </li>
          <li key="1">
            <div className="group relative block h-full bg-white">
              <div className="rounded-md h-full border-2 border-gray-900 bg-white">
                <div className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <span aria-hidden="true" role="img" className="text-lg sm:text-xl">
                      🥲
                    </span>
                  </div>

                  <h2 className="mt-4 font-medium text-gray-900 sm:text-lg">Component</h2>

                  <p className="mt-1 text-sm text-gray-700">TODO</p>
                </div>
              </div>
            </div>
          </li>
      </ul>
    </main>
    <footer>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
                <div className="flex text-gray-500">
                    <p>Crafted with <span className="text-red-500">❤</span> on <a href="https://github.com/nazimboudeffa/ui-cool-nextjs-talwind"><u>GitHub</u></a></p> 
                </div>
                
                <div className="flex text-gray-500">
                    <p>&copy; 2024 ACME</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}
