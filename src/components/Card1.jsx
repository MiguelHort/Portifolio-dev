function Card1({ icon , title , text }) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 w-[280px] h-[250px] px-6 shadow-xl rounded-2xl">
            <div className="flex justify-center items-center w-20 h-20 bg-blue-500 rounded-full">
                {icon}
            </div>
            <p className="text-blue-500 text-xl">{title}</p>
            <p className="text-slate-600 text-sm">{text}</p>
        </div>
    )
}

export default Card1;