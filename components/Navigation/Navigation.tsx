export default function Navigation() {
  return (
    <nav className="nav">
      <a href="#home" className="nav-items">
        <strong>W</strong>eather<strong>C</strong>hange
      </a>
      <a href="#legend" className="nav-items">
        Legend
      </a>
      <a href="#summary" className="nav-items">
        Summary
      </a>

      <p className="nav-text">
        Explore the dynamic weather patterns and climate trends of Berlin from
        2016 to 2023 through this visualization. Each colored dot represents a
        single day, allowing you to easily observe the fluctuations in
        temperature and weather conditions over the years. Through this
        visualization, I hope to foster a greater understanding of climate
        dynamics and encourage discussions on climate change and its impacts.
      </p>
    </nav>
  );
}
