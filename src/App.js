const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Changer", quantity: 1, packed: false },
];
    
    export default function App() {

     return (
      <div className="app">
         <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    )};

     function Logo() {
        return <h1>🏝️ Far Away 🧳</h1>;
      };

      function Form() {

        function handleSubmit(e) {
          e.preventDefault();
        };

        return (
          <form className="add-form" onClick={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select className="select">
              {Array.from({ length: 20 }, (_, i) => i + 1).map
              ((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
              </select>
              <input className="input" type="text" placeholder="Item ..." />
              <button>Add</button>
            
          </form>
        )
      };

     function PackingList() {
        return (
          <div className="list">
          <ul className="list ul">
            {initialItems.map((item) => (
            <Item item={item}  key={item.id} />
            ))}
          </ul>
          </div>
        )};

      function Item({ item }) {
        return (
            <li className="list li">
              <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
              <button className="list li button">❌</button>
            </li>
        );
      }

      function Stats() {
        return(
          <footer className="stats">
        <em>
          💼 You have X items on your list, and you already packed X (X%)
        </em>
        </footer>
        )
      };