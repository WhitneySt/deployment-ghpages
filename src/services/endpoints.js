const URL_BASE = 'https://miniback-books-app.onrender.com';

const filter = (url, searchObjetc = {}) => {
    let newUrl = url+'?';
    for (const key in searchObjetc) {
        const searchValue = searchObjetc[key];
        newUrl = `${newUrl}${key}=${searchValue}&`
    }
    return newUrl.slice(0, str.length - 1);
}

 const endpoits = {
     library: `${URL_BASE}/library`,
     book: (id) => `${URL_BASE}/library/${id}`,
     filter:(searchParams)=>filter(`${URL_BASE}/library`,searchParams)
}

export default endpoits;