import CustomSelect from "./CustomSelect/CustomSelect";
import countryIcon from "../assets/country_icon.svg";
import Pagination from "./Pagination";

interface Props {
  users: User[];  
  page: number;
  onFilterChange: (name: keyof Filters, value: number | string) => void;
  onSortChange: (option?:string) => void;
  handlePages: (page:number) => void;
}

function AllFilters({ users, onFilterChange, onSortChange, page, handlePages }:Props){  
  
  const uniqueCountries = Array.from(new Set(users.map( user => user.location.country )))
  const countryOptions = uniqueCountries.map( country => ({ value: country, label: country}))  

  const genreOptions = [
    { value: "Female", label: "Female" },
    { value: "Male", label: "Male" },
  ];

  const sortOptions = [
    { value: "Name", label: "Name" },
    { value: "Last Name", label: "Last Name" },
    { value: "Country", label: "Country" },
  ];

  const resultsOptions = [
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];  

  return (
    <div className='flex flex-col items-center sm:flex-row sm:flex-wrap sm:items-start sm:justify-center xl:justify-start gap-5'>
      <div>
        <p className='mb-2 text-center lg:text-start text-[#363636] font-semibold'>
          Users per page:
        </p>
        <CustomSelect
          options={resultsOptions}
          onChange={(option: any) => onFilterChange('results', option ? option.value : 20)}          
          placeholder='20'
          isResults={true}
        />
      </div>
      <div>
        <p className='mb-2 text-center lg:text-start text-[#363636] font-semibold'>
          Genre:
        </p>
        <CustomSelect
          options={genreOptions}
          onChange={(option: any) => onFilterChange('genre', option ? option.value : null)}          
          placeholder='Seleccione'
        />
      </div>
      <div className='relative'>
        <p className='mb-2 text-center lg:text-start text-[#363636] font-semibold'>
          Country:
        </p>
        <CustomSelect
          options={countryOptions}
          onChange={(option: any) => onFilterChange('country', option ? option.value : null)}
          placeholder='Seleccione'
          isCountry={true}
        />
        <img
          src={countryIcon}
          className='absolute inset-0 top-[60%] left-[4%]'
        ></img>
      </div>
      <div>
        <p className='mb-2 text-center lg:text-start text-[#363636] font-semibold'>
          Age:
        </p>
        <input
          className={`border-[1px] border-[#CAC4D0] p-[10px] rounded-[15px]
          placeholder:text-sm placeholder:text-[#8a878f] focus:outline-[#16dc91] w-[78px]`}
          placeholder='Ex: 36'
          onChange={(e) => onFilterChange('age', e.target.value)}
        />
      </div>
      <div>
        <p className='mb-2 text-center lg:text-start text-[#363636] font-semibold'>
          Sort by:
        </p>
        <CustomSelect
          options={sortOptions}
          onChange={(option: any) => onSortChange(option ? option.value : null)}          
          placeholder='Seleccione'
        />
      </div>
      <Pagination
        users={users}        
        page={page}
        handlePages={handlePages}
      />
      
    </div>
  );
};

export default AllFilters;
