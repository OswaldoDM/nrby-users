import { useEffect, useMemo, useState } from "react";
import { fetchData } from "./api/fetchData";
import { SortBy } from "./utils/enums";
import AllFilters from "./components/AllFilters";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import nrby from "./assets/nrby_logo.png";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NONE);
  const [filters, setFilters] = useState<Filters>({
    results: 20,
    country: null,
    age: null,
    genre: null,
  });

  useEffect(() => {
    setLoading(true);
    fetchData(filters.results, page)
      .then((data) => setUsers(data.results))
      .catch((err) => {
        setError(true);
        setError(err);
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [filters.results, page]);

  const filteredAndSortedUsers = useMemo(() => {
    const filtering = users.filter((user) => {
      const byCountry = filters.country
        ? user.location.country
            .toLowerCase()
            .includes(filters.country.toLowerCase())
        : true;

      const byAge = filters.age
        ? user.dob.age
            .toString()
            .toLowerCase()
            .includes(filters.age.toLowerCase())
        : true;

      const byGenre = filters.genre
        ? (filters.genre === "Female" && user.gender === "female") ||
          (filters.genre === "Male" && user.gender === "male")
        : true;

      return byCountry && byAge && byGenre;
    });

    const compareProperties:Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: (user) => user.location.country,
      [SortBy.NAME]: (user) => user.name.first,
      [SortBy.LAST]: (user) => user.name.last,
    };

    if (sorting !== SortBy.NONE) {
      return [...filtering].sort((a, b) => {
        const extractProperty = compareProperties[sorting];
        return extractProperty(a).localeCompare(extractProperty(b));
      });
    }

    return filtering;
  }, [users, filters, sorting]);

  const onFilterChange = (name:keyof Filters, value:number | string) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const onSortChange = (option?:string) => {
    if (option === "Name") setSorting(SortBy.NAME);
    if (option === "Last Name") setSorting(SortBy.LAST);
    if (option === "Country") setSorting(SortBy.COUNTRY);
    if (!option) setSorting(SortBy.NONE);
  };

  const handlePages = (op:number) => setPage(op);

  return (
    <>
      <header className='bg-[#363636] flex justify-center'>
        <img src={nrby}></img>
      </header>
      <div className='container mx-auto mt-8 w-full font-lato font-sm'>
        <AllFilters
          users={users}
          loading={loading}
          onFilterChange={onFilterChange}
          onSortChange={onSortChange}
        />

        {error && <p className='text-center mt-5'>Data error</p>}

        <UserList filteredAndSortedUsers={filteredAndSortedUsers} />

        <Pagination
          users={users}
          page={page}
          loading={loading}
          handlePages={handlePages}
        />
      </div>
    </>
  );
}

export default App;
