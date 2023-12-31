import React, { useEffect, useState } from 'react'
import { getBooks } from '../../services/booksService';
import './home.scss'
import useFilter from '../../hooks/useFilter';


const Home = () => {
  const [books, setBooks] = useState([]);
  const { filter, onFilter, filteredResult, filteredList } = useFilter({ pages: 0, genre: "" })
  // const [filteredBooks, setFilteredBooks] = useState([]);
  // const [filteredResult, setFilteredResult] = useState('');
  const [rangePages, setRangePages] = useState({ min: 0, max: 1000, step: 10 });
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ pages: 0, genre: "" })
  useEffect(() => {
    getBooks().then(response => {
      const categoryList = getCategories(response);
      const range = getPages(response)
      setBooks(response);
      setCategories(categoryList);
      setRangePages({
        ...rangePages,
        ...range
      })
      setFilters({ ...filters, pages: range.max });
    });
  }, []);

  const getPages = (books) => {

    // const minRange = books.reduce((previousValue, currentValue) => (currentValue?.book?.pages < previousValue?.book?.pages ? currentValue?.book?.pages : previousValue?.book?.pages), 0);
    // const maxRange = books.reduce((previousValue, currentValue) => (currentValue?.book?.pages > previousValue?.book?.pages ? currentValue?.book?.pages : previousValue?.book?.pages), 100);

    // console.log(minRange);
    // console.log(maxRange);
    const ranges = books.map(({ book }) => book.pages);
    return {
      min: Math.floor(Math.min(...ranges) / 1000) * 1000,
      max: Math.ceil(Math.max(...ranges) / 1000) * 1000
    }
  }

  const getCategories = (books) => {
    const categoryList = books.map(({ book }) => book.genre);
    return [... new Set(categoryList)];
  }
  const setFilter = (e) => {
    onFilter(e, books);
}

  // const setFilter = (e) => {
  //   const { value, name, type } = e.target;
  //   console.log(e.target.type, name);
  //   const filterParams = {
  //     ...filters,
  //     [name]: value
  //   }
  //   setFilters(filterParams);
  //   if (value) {
  //     let filtered = [...books];
  //     for (const key in filterParams) {
  //       if (filterParams[key]) {
  //         const condition = !isNaN(filterParams[key])
  //         const filterResult = condition ? filtered.filter(({ book }) => book[key] <= filterParams[key]) : filtered.filter(({ book }) => book[key] == filterParams[key]);
          
  //         filtered = [...filterResult]
  //         console.log(filterResult)
  //       }
  //     }
      
  //     setFilteredBooks([...filtered]);
  //     setFilteredResult(() => filtered.length ? '' : 'No se encontraron resultados')
  //   } else {
  //     setFilteredBooks([]);
  //     setFilteredResult('Filtro limpiado')
  //   }
  // }

  // const onFilter = (e) => {
  //   e.preventDefault();
  //   console.log(filters);
  // }
  return (
    <main>
      <form>
        <div>
          <label>No. Páginas</label>
          <input type="range" name={'pages'} value={filter.pages} min={rangePages.min} max={rangePages.max} step={rangePages.step} onChange={setFilter} />
        </div>
        <div>
          <label>Género</label>
          <select name={'genre'} onChange={setFilter} value={filter.genre}>
            <option value="" >Seleccione una</option>
            {
              categories.length && categories.map((type, index) => <option key={index} value={type}>{type}</option>)
            }
          </select>
        </div>
        {/* <button type='submit'>Buscar</button> */}
      </form>
      {
        filteredResult && <h2>{filteredResult}</h2>
      }
      <section className='cardsContainer'>
        {
          filteredList.length ? filteredList.map(({ book }, index) => <figure key={index}>
            <img src={book.cover} alt={book.title} />
          </figure>) :
            books.length ? (
              books.map((book, index) => <figure key={index}>
                <img src={book.book.cover} alt={book.book.title} />
              </figure>)
            ) : (<div>...Cargando</div>)
        }
      </section>
    </main>
  )
}

export default Home;