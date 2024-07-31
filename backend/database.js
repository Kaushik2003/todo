/*
todo{

tile: string;
description: string;
completed: boolean}

*/ 
const mongoose = require("mongoose");
const { boolean } = require("zod");
const {Schema}=mongoose;
//mongodb url handy
// mongod 
// mongodb+srv://kaushiksamadder2003:cVpCU5BOvufr5T23@cluster0.wzjjnxd.mongodb.net/
mongoose.connect("mongodb+srv://kaushiksamadder2003:cVpCU5BOvufr5T23@cluster0.wzjjnxd.mongodb.net")

const todoschema=new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todo=mongoose.model('todos',todoschema);

module.exports={
    todo 
}

