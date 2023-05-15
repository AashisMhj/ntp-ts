
export default function PostSection({data}:{data:any[]}) {
    
    return <div className="grid grid-cols-2">
        {
            data.map((item) => <div key={item.id} className="rounded-lg flex flex-col  p-4 my-10 mx-10 bg-slate-50 items-center">
                <img className="h-80 w-80" src={item.image} alt={item.title} />
                <h2 className="text-center text-2xl mt-2 ">{item.title}</h2>
            </div>)
        }
    </div>
}