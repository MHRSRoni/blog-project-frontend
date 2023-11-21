import { TextInput } from "keep-react";

const Search = ({ Icon, placeholder, style, iconPosition }) => {
  return (
    <TextInput
      placeholder={placeholder}
      color="gray"
      sizing="sm"
      type="text"
      addon={<Icon size={20} color="#5E718D" />}
      style={style}
      addonPosition={iconPosition ?? "left"}
    />
  );
};

export default Search;
