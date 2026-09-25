const Note = require("../models/notes.js");
const {StatusCodes} = require("http-status-codes");
const {body, validationResult} = require('express-validator');

const addNote = async (req, res) => {
    try {
        const {title, content} = req.body;
        const error = validationResult(req);
    if (!error.isEmpty()){
      return res.status(400).json({errors:error.array()})
    };
        const note = new Note({title, content});
        await note.save();
        res.status(StatusCodes.CREATED).json({
            success: true,
            statusCode:StatusCodes.CREATED,
            message:"Note(s) added successfully",
            data:note,
        });
    } catch (error) {
        console.log(error.message); //for developers
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            statusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{},
        });
    }
};

const getNotes = async (req, res) =>{
    try {
       const notes = await Note.find();
       res.status(StatusCodes.OK).json({
        success: true,
        statusCode:StatusCodes.OK,
        message: "",
        data: notes,
       });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            statusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{},
    });
    }
};
const getNote = async(req, res) =>{
    const {id} = req.params;
    try {
        const note = await Note.findById(id);
        if(!note){
            return res.status(StatusCodes.NOT_FOUND).json({
        success: true,
        statusCode:StatusCodes.OK,
        message:"Note not present",
        data:{},
    });
}
        res.status(StatusCodes.OK).json({
            success:true,
            statusCode:StatusCodes.OK,
            message:"",
            data:note,
        });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            statusCode:StatusCodes.BAD_REQUEST,
            message:`Yeap ${error.message}`,
            data:{},
        });
    }
};

const editNote = async(req, res) =>{
    try{
        const {id} = req.params;
        const{title, content} = req.body;
        const error = validationResult(req);
        if (!error.isEmpty()){
          return res.status(400).json({errors:error.array()})
        };
        const updatedNote = await Note.findByIdAndUpdate(id, {title, content}, {new:true});
        if(!updatedNote){
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false,
                statusCode:StatusCodes.NOT_FOUND,
                message:`Cannot find note with the ID ${id}`,
                data:{},
            });        
        }
         res.status(StatusCodes.OK).json({
            success:true,
            statusCode:StatusCodes.OK,
            message: "Note updated Successfully",
            data:updatedNote,
        });
    }catch(error){
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            statusCode:StatusCodes.BAD_REQUEST,
            message: error.message,
            data:{},
        });
    }
};

const deleteNote = async(req, res) =>{
    try {
        const {id} = req.params;
        const note = await Note.findByIdAndDelete(id);
        if(!note){
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false,
                statusCode:StatusCodes.NOT_FOUND,
                message:'Note not present',
                data:{},
        });
    }
    res.status(StatusCodes.OK).json({
        success:true,
        statusCode:StatusCodes.OK,
        message: "Note deleted Successfully",
        data:{},
    });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            statusCode:StatusCodes.BAD_REQUEST,
            message: error.message,
            data:{},
        });
    }
}

module.exports = {addNote, getNotes, getNote, editNote, deleteNote};