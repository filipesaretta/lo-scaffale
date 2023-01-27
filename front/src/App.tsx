import { Plus } from 'phosphor-react'
import { useState } from 'react'
import { AddNewBook } from './components/AddNewBook'
import { BookCard } from './components/BookCard'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className="max-w-7xl min-h-screen bg-slate-100 mx-auto px-2">
      <header className="grid grid-cols-2">
        <h1>Lo Scaffale</h1>
        <button className="bg-fuchsia-400 justify-self-end w-40 h-14 rounded-lg flex justify-center items-center gap-2 font-bold text-gray-800">
          <span>
            <Plus size={20} color="#1F2937" weight="bold" />
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
