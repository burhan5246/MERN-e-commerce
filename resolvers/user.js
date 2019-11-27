const User = require("../models/User");
const { isEmpty, putError, checkError } = require("../config/helpers");
const bcrypt = require("bcryptjs");
//const {  AuthenticationError, UserInputError } = require("apollo-server-express");

module.exports = {
  Query: {
    users: async (root, args) => {
      try {
        return await User.find({});
      } catch (error) {
        throw new Error("Something went wrong.");
      }
    },
    user: async (root, args) => {
      try {
        const user = await User.findById(args.id);
        if (!user) {
          throw putError("User not found");
        }
        return user;
      } catch (error) {
        error = checkError(error);
        throw new Error(error.custom_message);
      }
    }
  },
  Mutation: {
    addUser: async (root, args) => {
      try {
        const user = await User.findOne({ email: args.email });
        if (user) {
          throw putError("Email already exist.");
        } else {
          const newUser = new User({
            name: args.name,
            email: args.email,
            password: args.password,
            role: args.role
          });

          newUser.password = await bcrypt.hash(args.password, 10);
          const user = await newUser.save();
          return user;
        }
      } catch (error) {
        //console.log("here comes", error);
        error = checkError(error);
        throw new Error(error.custom_message);
      }
    },
    updateUser: async (root, args) => {
      try {
        console.log(args.meta);
        const user = await User.findById({ _id: args.id });
        if (user) {
          if (!isEmpty(args.password)) {
            //const salt = bcrypt.genSaltSync(10);
            user.password = await bcrypt.hash(args.password, 10);
          }

          user.name = args.name;
          user.email = args.email;
          user.role = args.role;
          //user.meta = args.meta;
          for (let i in args.meta) {
            user.meta.unshift(args.meta[i]);
          }
          await user.save();
          return user;
        } else {
          throw putError("User not exist");
        }
      } catch (error) {
        error = checkError(error);
        throw new Error(error.custom_message);
      }
    },
    deleteUser: async (root, args) => {
      const user = await User.findByIdAndRemove(args.id);
      if (user) {
        return true;
      }
      return false;
    }
  }
};
