import React, {  useState } from 'react'
import style from '../CSS/AddUser.module.css'

export const AddUser = ({setUsers}) => {
  const [formData, setFormData] = useState({
    name : "",
      email : "",
      company : {
        name:""
      }
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "company") {
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          name: value
        }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({formData}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data.formData]);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData({ 
      name : "",
      email : "",
      company : {
        name:""
      }
    });
   
  }
  

  return (
  <>
  <div className={style.heading}>ADD NEW USER</div>
   <div className={style.container}>
     <form className={style.userform} onSubmit={handleSubmit}>
    <div className={style.formgroup}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="company">Department:</label>
      <select
        id="company"
        name="company"
        value={formData.company.name}
        onChange={handleChange}
        required
      >
        <option value="">Select Department</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
   </div>
      </>
  )
}

