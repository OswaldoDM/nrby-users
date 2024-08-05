import Select from 'react-select';

const customStyles = (isResults:boolean,isCountry:boolean) => ({
  control: (provided:any) => ({
    ...provided,
    borderRadius: '15px',
    borderColor: '#CAC4D0',
    padding: '4px',
    paddingLeft: isCountry && '35px',    
    boxShadow: 'none',
    width: isResults ? '130px' : '315px',
    fontSize: '14px',    
    '&:hover': {
      borderColor: '#CAC4D0',
    },   
  }),
  menu: (provided:any) => ({
    ...provided,
    borderRadius: '15px',
    borderColor: '#CAC4D0',
  }),
  option: (provided:any, state:any) => ({
    ...provided,
    borderRadius: '15px',
    backgroundColor: state.isSelected ? '#EADDFF' : 'white',
    color: state.isSelected ? '#21005D' : '#49454F',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#EADDFF',
    },
  }),
  placeholder: (provided:any) => ({
    ...provided,
    color: '#49454F',
  }),  
  indicatorSeparator: (provided:any) => ({
    ...provided,
    display: 'none', 
  }),
  dropdownIndicator: (provided:any) => ({
    ...provided,
    color: '#49454F',
    '&:hover': {
      color: '#a1a1a2',
    },
  }),
});

const CustomSelect = ({ options,onChange,placeholder,isResults,isCountry }:any) => (
  <Select
    styles={customStyles(isResults,isCountry)}
    options={options}
    onChange={onChange}
    placeholder={placeholder}
    isClearable
  />
);

export default CustomSelect;
