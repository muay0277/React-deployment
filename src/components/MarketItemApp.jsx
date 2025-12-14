import React, { useState } from "react";

const MarketItemApp = () => {
  const [items, setItem] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const itemName = formData.get("name");
    setItem([...items, itemName]);
    e.target.reset();
  };
  function handleRemoveItem(index) {
    const newItems = items.filter((items, i) => i !== index);
    setItem(newItems);
  }
  console.log("items:", items);
  return (
    <div>
      <h1>ແອັບຈົດໂນ້ດລົງຕະຫຼາດ</h1>
      <form onSubmit={handleSubmit} className="market-app-form">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="ລາຍການທີ່ຕ້ອງຊື້"
          autoFocus
        />
        <button>ເພີ່ມລາຍການ</button>
      </form>
      {items.length === 0 ? (
        <p>ຍັງບໍ່ມີລາຍການ</p>
      ) : (
        items.map((items, index) => (
          <p>
            {items}
            {""}
            <button onClick={() => handleRemoveItem(index)}>ລົບລາຍການ</button>
          </p>
        ))
      )}
    </div>
  );
};

export default MarketItemApp;
