/*
todo{

tile: string;
description: string;
completed: boolean}

*/ 
const mongoose = require("mongoose");
const { boolean } = require("zod");
//mongodb url handy
// mongod 
// mongodb+srv://kaushiksamadder2003:cVpCU5BOvufr5T23@cluster0.wzjjnxd.mongodb.net/
const todoschema=mongoose.Schema({
    title: String,
    description: String,
    completed: boolean
})

const todo=mongoose.model('todos',todoschema);

module.exports={
    todo 
}