import React, { useState } from 'react'
import style from '../CSS/AddUser.module.css'

export const Updateusers = ({setUpdate,users,setUsers,valueId}) => {
    
  
    const user = users.filter((el)=>el.id === valueId);
    const [formData, setFormData] = useState({
      name: user[0].name,
      email: user[0].email,
      company: {
        name: user[0].company.name
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
    
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedUsers = users.map((u) =>
        u.id === valueId
          ? {
              ...u,
              name: formData.name,
              email: formData.email,
              company: {
                name: formData.company.name
              }
            }
          : u
      );
      setUsers(updatedUsers);
      setUpdate(false)
    };
     


 
  return (
    <>
     <div className={style.heading}>UPDATE USER</div>
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
   <button type="submit">Edit</button>
 </form>
 </div>
    </>
   
  )
}
