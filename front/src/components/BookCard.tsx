import bookCover from '../assets/atomic_habits.jpg'

export function BookCard() {
  return (
    <div className="w-80 grid grid-cols-2 bg-lavender-blue-400 p-4 rounded-md ">
      <img className="w-32 justify-self-center" src={bookCover} alt="" />
      <div className="flex flex-col">
        <h2 className="font-bold">
          Book Title Is very very long name whats happens
        </h2>
        <span>Autor</span>
        <span>⭐</span>
      </div>
    </div>
  )
}
