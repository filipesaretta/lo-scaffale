import { FormEvent, useEffect, useReducer } from 'react'

interface setStateProps {
  setIsModalOpen: (value: boolean) => void
}

export function AddNewBook({ setIsModalOpen }: setStateProps) {
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [rating, setRating] = useState('')

  const [newBook, setNewBook] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    { title: '', author: '', rating: '' },
  )

  function addBook(e: FormEvent) {
    e.preventDefault()
    // console.log(newBook)
    setIsModalOpen(false)
  }

  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsModalOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [setIsModalOpen])

  return (
        onClick={(e) => {
          // This makes the "propagation" of the click not work, so makes clicks inside of the
          // modal not close him unless explicity asked.
          e.stopPropagation()
        }}

        <select
          id="rating"
          size={5}
          className="bg-gray-50 border border-gray-300 text-rich-black text-sm rounded-lg focus:ring-blue-500 focus:border-rich-black block w-full p-2.5"
          value={newBook.rating}
          onChange={(e) =>
            setNewBook({
              rating: e.target.value,
            })
          }
        >
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>

        <input
          type="submit"
          value="Aggiungi"
          className="text-white bg-slate-900 transition-colors hover:ease-in hover:bg-slate-700  focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg px-5 py-2.5 text-center  items-center cursor-pointer"
        />
      </form>
    </div>
  )
}
