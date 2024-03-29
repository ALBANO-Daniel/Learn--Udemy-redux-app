import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-2 border rounded">
      <div onClick={() => setExpanded(!expanded)} className="bg-zinc-100 flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
        <div>
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t px-12">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
