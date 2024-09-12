export default function SelectTime() {
    const sampledata = [
        {
            id: 1,
            date: "January 21, 2025",
            location: {
                id: 1,
                availability: 10,
                loc: "Nashville pencil box",
            },
            time: "12:00 pm cst",
        },
        {
            id: 2,
            date: "Februrary 21, 2025",
            location: {
                id: 2,
                availability: 3,
                loc: "Antioch Pencil box",
            },
            time: "12:00 pm cst",
        },
        {
            id: 3,
            date: "march 21, 2025",
            location: {
                id: 3,
                availability: 0,
                loc: "antioch pencil box",
            },
            time: "12:00 pm cst",
        }
    ]

    return (
        <main>
            <div className="flex flex-col gap-10 sm:items-center px-5 py-10">
                <h1 className="font-bold text-3xl">Select Your Shop Date</h1>

                <ul className="flex flex-col gap-8">
                    {sampledata.map((item) => (
                        <ShopListItem data={item} key={item.id} />
                    ))}
                </ul>
            </div>
        </main>
    )
}

function ShopListItem({ data }) {

    return (
        <li className="bg-white border flex flex-col gap-3 p-6 rounded-lg shadow-md" key={data.id}>
            <p className="font-bold text-2xl">{data.date}</p>

            <div className="flex flex-col gap-1">
                <p className="font-medium">Time: {data.time}</p>
                <p className="font-light">location: {data.location.loc}</p>
                <p className={`font-semibold ${data.location.availability === 0 && "text-red-500"}`}>available spots: {data.location.availability}</p>
            </div>

            <button className="active:scale-95 bg-blue-900 disabled:bg-blue-900/50 disabled:cursor-not-allowed  p-5 rounded-xl sm:w-[300px] text-white/90 transition w-full" disabled={data.location.availability === 0}>book now</button>
        </li>
    )
}
