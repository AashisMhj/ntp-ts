import { PostSection } from "@/components/pages/home";
async function getData() {
  try {
    const res = await fetch('http://localhost:3000/api/post');
    return res.json()
  } catch (error) {
    return [];
  }
}

export default async function Home() {
  const data = await getData();
  return (
    <main>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 justify-between items-center bg-blue-400">
        <section>
          <div className="text-center px-6">
            <h1 className="text-6xl text-white mb-4 ">Nextjs Template</h1>
            <p className="text-2xl">Started Template for Nextjs Project with tailwind, prisma</p>
          </div>
        </section>
        <PostSection data={data.data} />
      </div>
    </main>
  )
}
