export default function Navbar({ keyword, onSearch }) {
  return (
    <nav>
      <div className="logo">
        <img src="icon.png" alt="Logo" />
        <h1>React Note Online</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={keyword}
          onChange={onSearch}
        />
      </div>
    </nav>
  );
}
