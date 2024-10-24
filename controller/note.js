// const express = require('express');
const Note = require("../models/notes.js");
const {StatusCodes} = require("http-status-codes");
// const router = require('../routes/note.js');

const addNote = async (req,res) => {
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});
        await note.save();
        res.status(StatusCodes.CREATED).json({
            success: true,
            statusCode:StatusCodes.CREATED,
            message:"Note added successfully",
            data:note,
        });
    } catch (error) {
        console.log(error.message);
        res.statusCode(StatusCodes.BAD_REQUEST).json({
            success:false,
            statusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
        })
    }
}

// module.exports = addNote;

const getNotes = async (req, res) =>{
    try {
       const notes = await Note.find();
       if(notes.length === 0){
        return res.status(200).json({message: "Notes not added"})
       }
       res.status(200).json(notes);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
};

const getNote = async(req, res) =>{
    const {id} = req.params;
    // console.log(req.params);
    try {
        const note = await Note.findById(id);
        if(!note)
            return res.status(404).json({msg: "Note not found."});
        res.status(200).json(note);
    } catch (error) {
        res.status(400).json({msg:error.message});
    }
}

// Done by me,main difference the new keyword
// const editNote = async(req, res) =>{
//     try{
//         const {id} = req.params;
//         const note = await Note.findByIdAndUpdate(id, req.body);
//         if(!note){
//             return res.status(404).json({message:`Cannot find note the the ID ${id}`});
//         }
//         const updatedData = await Note.findById(note);
//          res.status(200).json(updatedData);
//          console.log(updatedData);
         
//     }catch(error){
//         res.status(400).json({msg: error.message});
//     }
// }

//Done in class
const editNote = async(req, res) =>{
    try{
        const {id} = req.params;
        const{title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new:true});
        if(!updatedNote){
            return res.status(404).json({message:`Cannot find note the the ID ${id}`});
        }
         res.status(200).json({msg: "Note updated Successfully"});
         console.log(updatedNote);
         
    }catch(error){
        res.status(400).json({msg: error.message});
    }
}

const deleteNote = async(req, res) =>{
    try {
        const {id} = req.params;
        const note = await Note.findByIdAndDelete(id);
        if(!note){
            return res.status(404).json({message:`Cannot find note for ID ${id}`});
        }
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        
    }
}

module.exports = {addNote, getNotes, getNote, editNote, deleteNote};