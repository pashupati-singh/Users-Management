import React, { useEffect, useState } from 'react'
import style from '../CSS/AddUser.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { USERSADDFUN } from '../Redux/UsersManagement/action';

export const AddUser = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    department: ''
  });
  const [showNotification, setShowNotification] = useState(false);
  const[newUser,setNewUser] = useState(false)
  const dispatch = useDispatch();
  const {add , addUser} = useSelector((store)=>store.userReducer)
  const [notificationMessage, setNotificationMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(USERSADDFUN(formData))
    setFormData({ 
      firstname: '',
      lastname: '',
      email: '',
      department: ''
    });
    setNewUser(!newUser)
  }
  useEffect(() => {
     
      setShowNotification(true);
      setNotificationMessage(add)
    setTimeout(() => {
      setShowNotification(false);
      setNotificationMessage('')
    }, 1000);
  }, [addUser, add,newUser]); 

  return (
  <>
  <div className={style.heading}>ADD NEW USER</div>
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
    <button type="submit">Submit</button>
  </form>
   </div>

   <div className={`${style.notification} ${showNotification ? '' : style.hide} ${addUser ? '' : style.error}`}>
        {notificationMessage}
      </div>
      </>
  )
}

