import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";
import type { ReactNode } from "react";

type Props = {
  value: string;
  onChange: (val: string) => void;
  options: string[]; // tanlanadigan qiymatlar ro'yxati
  placeholder?: string; // hech narsa tanlanmagan paytda ko‘rinadigan matn
  icon?: ReactNode; // optional — MapPin yoki boshqa icon
  className?: string; // qo‘shimcha class yozish uchun ixtiyoriy props
};

export default function CustomSelect({
  value,
  onChange,
  options,
  placeholder = "Qiymat tanlang",
  icon,
  className = "",
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 250,
        bgcolor: "#37414C",
        borderRadius: "10px",
        "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "white",
        },
      }}
      size="small"
      className={className} // <-- qo‘shildi
    >
      <Select
        value={value}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            className="text-gray-400"
          >
            {icon} {selected || placeholder}
          </div>
        )}
        sx={{ color: "gray" }}
      >
        <MenuItem value="">
          <em className="">{placeholder}</em>
        </MenuItem>
        {options.map((opt, i) => (
          <MenuItem key={i} value={opt}>
            {opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
