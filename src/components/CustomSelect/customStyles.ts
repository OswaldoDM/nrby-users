import { StylesConfig } from "react-select";

export const customStyles = (
  isResults?: boolean,
  isCountry?: boolean
):StylesConfig<Option, false> => ({

  control: (provided) => ({
    ...provided,
    borderRadius: "15px",
    borderColor: "#CAC4D0",
    padding: "4px",
    paddingLeft: isCountry ? "35px" : undefined,
    boxShadow: "none",
    width: isResults ? "130px" : "250px",
    fontSize: "14px",
    "&:hover": {
      borderColor: "#CAC4D0",
    },
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "15px",
    borderColor: "#CAC4D0",
  }),

  option: (provided, state) => ({
    ...provided,
    borderRadius: "15px",
    backgroundColor: state.isSelected ? "#EADDFF" : "white",
    color: state.isSelected ? "#21005D" : "#49454F",
    fontSize: "14px",
    cursor: "pointer",    
    "&:hover": {
      backgroundColor: "#16dc91",
    },
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "#49454F",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#49454F",
    cursor: "pointer",
    "&:hover": {
      color: "#a1a1a2",
    },
  }),
});
