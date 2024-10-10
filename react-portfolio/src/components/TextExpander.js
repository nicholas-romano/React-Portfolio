import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export function TextExpander({
  collapsedNumWords = 50,
  expandButtonText = " Read more",
  collapseButtonText = " Read less",
  expanded = false,
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + " ...";

  return (
    <div>
      <span>{displayText}</span>
      <Link to="#" onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </Link>
    </div>
  );
}
