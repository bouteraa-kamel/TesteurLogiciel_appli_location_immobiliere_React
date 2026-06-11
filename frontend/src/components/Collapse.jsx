import { useState } from "react";
import "./Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h3>{title}</h3>

        <span
          className={isOpen ? "collapse-arrow open" : "collapse-arrow"}
          onClick={toggleCollapse}
        >
          ❮
        </span>
      </div>

      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;
