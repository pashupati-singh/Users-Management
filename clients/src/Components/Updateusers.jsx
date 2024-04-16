import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import style from '../CSS/AddUser.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { USERSUPDATEFUN } from '../Redux/UsersManagement/action';

export const Updateusers = () => {
   const dispatch = useDispatch();
    const {id} = useParams();
    const {users} = useSelector((store)=>store.userReducer)
    const user = users.filter((el)=>el._id === id);
    const [formData, setFormData] = useState({
        firstname: user[0].firstname,
        lastname:user[0].lastname,
        email: user[0].email,
        department: user[0].department
      });
      const [showNotification, setShowNotification] = useState(false);
      const [notificationMessage, setNotificationMessage] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(USERSUPDATEFUN(formData, id));
        setShowNotification(true);
        setNotificationMessage('User updated successfully!');
        setTimeout(() => {
          setShowNotification(false);
          setNotificationMessage('');
        }, 3000);
      }; 
 
  return (
    <div className={style.container}>
    <form className={style.userform} onSubmit={handleSubmit}>
   <div className={style.formgroup}>
     <label htmlFor="firstname">First Name:</label>
     <input
       type="text"
       id="firstname"
       name="firstname"
       value={formData.firstname}
       onChange={handleChange}
       required
     />
   </div>
   <div className="form-group">
     <label htmlFor="lastname">Last Name:</label>
     <input
       type="text"
       id="lastname"
       name="lastname"
       value={formData.lastname}
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
     <label htmlFor="department">Department:</label>
     <select
       id="department"
       name="department"
       value={formData.department}
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
 {showNotification && (
        <div className={`${style.notification} ${style.success}`}>
          {notificationMessage}
        </div>
      )}
 </div>
  )
}
