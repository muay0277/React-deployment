import React, { useState } from "react";

const PreviewData = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    age: 0,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>ແອັບສະແດງຜົນຂໍ້ມູນ</h1>
      <h2>
        ຊື່:{data.fname} ນາມສະກຸນ:{data.lname}, ອາຍຸ{data.age}
      </h2>
      <input
        type="text"
        className="preview-input"
        placeholder="ປ້ອນຊື່ນາມສະກຸນຂອງທ່ານ..."
        name="fname"
        value={data.fname}
        onChange={handleChange}
      />
      <input
        type="text"
        className="preview-input"
        placeholder="ປ້ອນຊື່ນາມສະກຸນຂອງທ່ານ..."
        name="lname"
        value={data.lname}
        onChange={handleChange}
      />
      <input
        type="number"
        className="preview-input"
        placeholder="ປ້ອນຊື່ນາມສະກຸນຂອງທ່ານ..."
        name="age"
        value={data.age}
        onChange={handleChange}
      />
    </div>
  );
};

export default PreviewData;
