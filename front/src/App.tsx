import { Plus } from 'phosphor-react'
import { useState } from 'react'
import { AddNewBook } from './components/AddNewBook'
import { BookCard } from './components/BookCard'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="max-w-7xl min-h-screen mx-auto px-2">
      <header className="flex p-6 items-center">
        <h1 className="mr-auto">Lo Scaffale</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-lavender-blue-400 flex gap-2 rounded px-8 py-3 text-sm font-medium text-rich-black transition hover:scale-[1.02] hover:shadow-md ring-lavender-blue-800 focus:outline-none focus:ring active:bg-lavender-blue-800 justify-self-center"
        >
          <span>
            <Plus size={20} color="#011627" weight="bold" />
          </span>
          Add a book
        </button>
      </header>
      {/* TODO: Search box */}
      <BookCard />
      {isModalOpen && <AddNewBook setIsModalOpen={setIsModalOpen} />}
    </div>
  )
}

export default App
