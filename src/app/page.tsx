import { Montserrat } from "next/font/google"
import Link from "next/link";

export default function Home() {
  const examples = [
    {
      key: "0",
      title: "Hero",
      description: "Static",
      href: "/hero",
    },
    {
      key: "1",
      title: "ToS",
      description: "Animated",
      href: "/tos",
    },
    {
      key: "2",
      title: "Display on scroll",
      description: "Animated",
      href: "/display-on-scroll"
    },
    {
      key: "3",
      title: "Infinite caroussel scroll",
      description: "Animated",
      href: "/infinite-caroussel",
    },
    {
      key : "4",
      title: "Component",
      description: "TODO",
      href: "#",
    },
    {
      key : "5",
      title: "Component",
      description: "TODO",
      href: "#",
    },
    {
      key : "6",
      title: "Component",
      description: "TODO",
      href: "#",
    },
    {
      key : "7",
      title: "Component",
      description: "TODO",
      href: "#",
    },
    {
      key : "8",
      title: "Component",
      description: "TODO",
      href: "#",
    },
    {
      key : "9",
      title: "Component",
      description: "TODO",
      href: "#",
    },
    {
      key : "10",
      title: "Component",
      description: "TODO",
      href: "#",
    }
  ]
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
        {examples.map((example) => (      
          <li key={example.key} className="flex flex-col">
            <Link href={example.href}>
              <div className="flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg transition-transform transform hover:scale-105 w-64 h-32">
                <h3 className="text-xl font-semibold text-center">{example.title}</h3>
                <p className="text-sm text-gray-500">{example.description}</p>
              </div>
            </Link>
          </li>
        ))}
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
