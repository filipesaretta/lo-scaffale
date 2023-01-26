import { useReducer } from 'react'

export function AddNewBook() {
  // const [title, setTitle] = useState('')
  // const [author, setAuthor] = useState('')
  // const [rating, setRating] = useState('')

  const [newBook, setNewBook] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    { title: '', author: '', rating: '' },
  )

  function addBook(e) {
    e.preventDefault()
    console.log(newBook)
  }

  return (
    <div className="max-w-md flex flex-col bg-lavender-blue-800 rounded-md pt-4">
      <h2 className="font-medium text-2xl text-center">Aggiungi nuovo libro</h2>
      <form
        onSubmit={addBook}
        className="flex flex-col mb-0 p-4 max-w-md space-y-4"
      >
        <label htmlFor="name" className="sr-only">
          Titulo
        </label>
        <input
          type="text"
          id="name"
          placeholder="Titolo"
          className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          value={newBook.title}
          onChange={(e) =>
            setNewBook({
              title: e.target.value,
            })
          }
        />
        <label htmlFor="author" className="sr-only">
          Autore
        </label>
        <input
          type="text"
          id="author"
          placeholder="Autore"
          className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
          value={newBook.author}
          onChange={(e) =>
            setNewBook({
              author: e.target.value,
            })
          }
        />
        <label htmlFor="rating" className="sr-only">
          Valutazione
        </label>

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
