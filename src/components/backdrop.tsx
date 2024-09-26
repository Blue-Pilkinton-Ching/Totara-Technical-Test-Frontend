export default function Backdrop({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl shadow-lg p-7 sm:p-10 bg-gray-100 w-[min(400px,100vw)] gap-4 flex-col flex flex-center">
      {children}
    </div>
  )
}
