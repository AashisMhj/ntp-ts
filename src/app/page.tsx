import { PostSection } from "../components/home"

async function getData(){
  const res = await fetch('http://localhost:3000/api/post');
  return res.json()
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <div className="h-screen grid grid-cols-2 justify-between items-center bg-blue-400">
        <section>
          <div className="text-center px-6">
            <h1 className="text-6xl text-white ">Nextjs Template</h1>
            <p className="text-2xl">Started Template for Nextjs Project with tailwind, prisma</p>
          </div>
        </section>
        <section>
          <PostSection data={data.data} />
        </section>
      </div>
    </main>
  )
}
