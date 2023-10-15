interface Props {
  children: React.ReactElement | React.ReactElement[],
  label: string
}

export default function Card({ children, label }: Props): React.ReactElement {
  return (
    <div className="h-[90%] max-h-[417px] relative">
      <span className="absolute bg-slate-900 outline-dotted outline-green-800 py-2 px-4 rounded-lg z-10 text-white top-[-25px] left-4">
        {label}
      </span>
      <div className="h-full p-3 pt-5 flex justify-center items-center text-slate-300 w-full overflow-hidden bg-slate-900 rounded-3xl outline-dotted outline-slate-700 relative">

        <div className="h-full w-full max-h-full flex flex-col overflow-y-scroll scrollbar">
          {children}
        </div>
      </div>
    </div>
  )
}