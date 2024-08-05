import { Filters, User } from "../types";
import CustomSelect from "./CustomSelect";
import countryIcon from "../assets/country_icon.svg";

interface FiltersProps {
  users: User[];
  handleFilterChange: (name: keyof Filters, value: any) => void;
  loading: boolean;
}

const AllFilters = ({ users, handleFilterChange, loading }:FiltersProps) => {
  const countryOptions = Array.from(
    new Set(users.map((user) => user.location.country))
  ).map((country) => ({ value: country, label: country }));

  const genreOptions = [
    { value: "Femenino", label: "Femenino" },
    { value: "Masculino", label: "Masculino" },
  ];

  const resultsOptions = [
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
  ];

  return (
    <div className='flex flex-col items-center lg:flex-row lg:items-start gap-5'>
      <div>
        <p className='mb-2 text-center lg:text-start text-[#21005D] font-medium'>
          Resultados por página:
        </p>
        <CustomSelect
          options={resultsOptions}
          onChange={(option: any) =>handleFilterChange('results', option ? option.value : 20)}
          placeholder='20'
          isResults={true}
        />
      </div>
      <div>
        <p className='mb-2 text-center lg:text-start text-[#21005D] font-medium'>
          Genero:
        </p>
        <CustomSelect
          options={genreOptions}
          onChange={(option: any) => handleFilterChange('genre', option ? option.value : null)}
          placeholder='Seleccione'
        />
      </div>
      <div className='relative'>
        <p className='mb-2 text-center lg:text-start text-[#21005D] font-medium'>
          Nacionalidad:
        </p>
        <CustomSelect
          options={countryOptions}
          onChange={(option: any) => handleFilterChange('country', option ? option.value : null)}
          placeholder='Seleccione'
          isCountry={true}
        />
        <img
          src={countryIcon}
          className='absolute inset-0 top-[60%] left-[4%]'
        ></img>
      </div>
      <div>
        <p className='mb-2 text-center lg:text-start text-[#21005D] font-medium'>
          Edad:
        </p>
        <input
          className={`border-[1px] border-[#CAC4D0] p-[10px] rounded-[15px]
          placeholder:text-sm placeholder:text-[#49454F] focus:outline-[#c3a7f6] w-[78px]`}
          placeholder='Ejm. 36'
          onChange={(e) => handleFilterChange('age', e.target.value)}
        />
      </div>
      {loading && <div className='lds-dual-ring'></div>}
    </div>
  );
};

export default AllFilters;
