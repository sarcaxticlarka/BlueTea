 

function ItemList() {
    const items = [
      { id: 101, name: "Item 1" },
      { id: 102, name: "Item 2" },
      { id: 103, name: "Item 3" }
    ];
  
    return (
     <ul>
        {items.map((item)=>(
            <li>item.name</li>
        ))}
     </ul>
    );
  }