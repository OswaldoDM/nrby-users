import Select, { SingleValue } from 'react-select';
import { customStyles } from './customStyles';

interface Props {
  options: Option[];
  onChange: (option: SingleValue<Option>) => void;
  placeholder: string;
  isResults?: boolean;
  isCountry?: boolean;
}

const CustomSelect = ({ options, onChange, placeholder, isResults, isCountry }:Props) => (
  <Select
    styles={customStyles(isResults, isCountry)}
    options={options}
    onChange={onChange}
    placeholder={placeholder}
    isClearable
  />
);

export default CustomSelect;

