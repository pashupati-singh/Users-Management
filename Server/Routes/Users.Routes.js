
import express from "express";
import { UsersModel } from "../Models/Users.models.js";


export const usersRoute = express.Router();

const PAGE_SIZE = 6;

usersRoute.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const skip = (page - 1) * PAGE_SIZE;
        const users = await UsersModel.find().skip(skip).limit(PAGE_SIZE);

         const totalCount = await UsersModel.countDocuments();
         const totalPages = Math.ceil(totalCount / PAGE_SIZE);
        res.json({ users , totalPages });
    } catch (error) {
        res.status(500).json({ error });
    }
});


usersRoute.post('/', async (req, res) => {
  try {
      
      const existingUser = await UsersModel.findOne({ email: req.body.email });
      if (existingUser) {
          return res.json({ msg: "Email already exists" , user : false});
      }

      const newUser = new UsersModel(req.body);
      await newUser.save();
      return res.json({ msg: "New User Get Added" , user : true });
  } catch (error) {
      return res.status(500).json({ error , user : false });
  }
});


usersRoute.patch("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersModel.findOne({ _id: id });
      if (user) {
        await UsersModel.findByIdAndUpdate({ _id: id }, req.body);
        const post = await UsersModel.findOne({ _id: id });
        res.status(200).json({ msg: "updated user",post });
      } else {
        res.json({ msg: "user not found" });
      }
    } catch (error) {
      res.status(400).json({ err: error });
    }
  });

  usersRoute.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const user = await UsersModel.findOne({ _id: id });
      if (user) {
        await UsersModel.findByIdAndDelete({ _id: id });
        res.status(200).json({ msg: "deleted user", user });
      } else {
        res.json({ msg: "user not found" });
      }
    } catch (error) {
      res.status(400).json({ err: error });
    }
  });

  export default usersRoute;