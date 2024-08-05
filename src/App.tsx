import { useEffect, useMemo, useState } from "react";
import { Filters, User } from "./types.d";
import { fetchData } from "./api/fetchData";
import AllFilters from "./components/AllFilters";
import UserList from "./components/UserList";
import Pagination from "./components/Pagination";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState<Filters>({results: 20,country: null,age: null,genre: null,});
  const [page, setPage] = useState(1);

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

  const filteredUsers = useMemo(() => {
    let filtered = users;

    if (filters.country) {
      filtered = filtered.filter((user) =>
        user.location.country
          .toLowerCase()
          .includes(filters.country!.toLowerCase())
      );
    }

    if (filters.age) {
      filtered = filtered.filter((user) =>
        user.dob.age
          .toString()
          .toLowerCase()
          .includes(filters.age!.toLowerCase())
      );
    }

    if (filters.genre) {
      filtered =
        filters.genre === "Femenino"
          ? filtered.filter((user) => user.gender === "female")
          : filters.genre === "Masculino"
          ? filtered.filter((user) => user.gender === "male")
          : filtered;
    }

    return filtered;
  }, [users, filters]);

  const handleFilterChange = (name: keyof Filters, value: any) => {
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handlePages = (op: number) => setPage(op);

  return (
    <>
      <header className='bg-[#EADDFF] py-[10px] flex justify-center items-center'>
        <h2 className='font-nunito text-[45px] text-[#21005D]'>Personas</h2>
      </header>
      <div className='container mx-auto mt-8 w-full font-lato font-sm'>
        <AllFilters users={users}handleFilterChange={handleFilterChange} loading={loading}/>
        {error && <p className='text-center mt-5'>Data error</p>}
        <UserList filteredUsers={filteredUsers} />
        <Pagination users={users} page={page} loading={loading} handlePages={handlePages}/>
      </div>
    </>
  );
}

export default App;
