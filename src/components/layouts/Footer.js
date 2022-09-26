import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  return (
    <div className="container block">
      <div className="text">
        <h3>Social Contact</h3>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>
            <LinkedInIcon
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/hasan-sivrikaya-507a53130/"
                )
              }
            />
          </Button>
          <Button>
            <GitHubIcon
              onClick={() => window.open("https://github.com/Hasan-1994")}
            />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
export default Footer;
