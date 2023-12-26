import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('morning1');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="MrngAfnEvn">
        <div className="Morning">
        <div MorningHeadText></div>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="morning1">10:00AM</ToggleButton>
          <ToggleButton value="morning2">10:30AM</ToggleButton>
          <ToggleButton value="morning3">11:00AM</ToggleButton>
          <ToggleButton value="morning4">11:30AM</ToggleButton>
        </ToggleButtonGroup>
        </div>
        <div className="Afternoon">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="afternoon1">12:00PM</ToggleButton>
          <ToggleButton value="afternoon2">12:30PM</ToggleButton>
          <ToggleButton value="afternoon3">01:00PM</ToggleButton>
          <ToggleButton value="afternoon4">01:30PM</ToggleButton>
          <ToggleButton value="afternoon5">02:00PM</ToggleButton>
          <ToggleButton value="afternoon6">02:30PM</ToggleButton>
          <ToggleButton value="afternoon7">03:00PM</ToggleButton>
        </ToggleButtonGroup>
        </div>
        <div className="Evening">
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="evening1">12:00PM</ToggleButton>
          <ToggleButton value="evening2">12:30PM</ToggleButton>
          <ToggleButton value="evening3">01:00PM</ToggleButton>
          <ToggleButton value="evening4">01:30PM</ToggleButton>
          <ToggleButton value="evening5">02:00PM</ToggleButton>
          <ToggleButton value="evening6">02:30PM</ToggleButton>
        </ToggleButtonGroup>
        </div>
    </div>
  );
}
