export function GlitchText({ children, className = "", isActive = false }) {
  return (
    <span className={`glitch ${isActive ? "is-active" : ""} ${className}`}>
      <span className="glitch__main">{children}</span>
      <span className="glitch__layer glitch__layer--1">
        {children}
      </span>
      <span className="glitch__layer glitch__layer--2">
        {children}
      </span>
    </span>
  );
}