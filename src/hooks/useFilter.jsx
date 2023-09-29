import { useState } from "react";

const useFilter = (initalvalue = {}) => {
    const [filter, setFilter] = useState(initalvalue);
    const [filteredResult, setFilteredResult] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    const onFilter = (e, booksList) => {
        const { value, name } = e.target;
        const filterParams = {
            ...filter,
            [name]: value
        }
        let filtered = booksList;
        for (const key in filterParams) {
            if (filterParams[key]) {
                const filterResult = !isNaN(filterParams[key]) ? filtered.filter(({ book }) => book[key] <= filterParams[key]) : filtered.filter(({ book }) => book[key] == filterParams[key]);
                filtered = [...filterResult]
            }
        }
        setFilteredResult(() => filtered.length ? '' : 'No se encontraron resultados')
        setFilter(filterParams);
        setFilteredList(filtered)

    }
    return { filter, onFilter, filteredResult, filteredList }
}

export default useFilter;