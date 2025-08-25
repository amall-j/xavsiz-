import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { MapPin } from "lucide-react";
import type { SelectChangeEvent } from "@mui/material/Select";
import Select from "@mui/material/Select";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export default function RegionSelect({ value, onChange }: Props) {
  const regions = [
    "Toshkent",
    "Andijon",
    "Buxoro",
    "Farg‘ona",
    "Jizzax",
    "Xorazm",
    "Namangan",
    "Navoiy",
    "Qashqadaryo",
    "Qoraqalpog‘iston",
    "Samarqand",
    "Sirdaryo",
    "Surxondaryo",
  ];

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
    >
      <Select
        labelId="region-select-label"
        id="region-select"
        value={value}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <MapPin size={18} /> {selected || "Viloyat tanlang"}
          </div>
        )}
        sx={{ color: "white" }}
      >
        <MenuItem value="">
          <em>Barchasi</em>
        </MenuItem>
        {regions.map((reg, i) => (
          <MenuItem key={i} value={reg}>
            {reg}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
