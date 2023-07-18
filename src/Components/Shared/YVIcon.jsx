// import DeleteIcon from "@mui/icons-material/Delete";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";
// import * as React from "react";

// export default function YVIcon({ title, icon }) {
//   return (
//     <Tooltip title="Delete">
//       <IconButton>
//         <DeleteIcon />
//       </IconButton>
//     </Tooltip>
//   );
// }

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import * as React from "react";

export default function YVIcon({ title, icon, eventClick, YVBgColor }) {
  return (
    <Tooltip title={title || ""} onClick={eventClick && eventClick}>
      <IconButton
        sx={{
          "&:hover": { bgcolor: "#222222" },
          color: "#f1f1e3",
          bgcolor: YVBgColor || "transparent",
        }}>
        {icon}
      </IconButton>
    </Tooltip>
  );
}
