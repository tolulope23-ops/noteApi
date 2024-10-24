const Note = require("../models/notes.js");
const {StatusCodes} = require("http-status-codes");


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
        console.log(note); //For developer
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            statusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{},
        });
    }
};

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

                                         // OR
    // main difference the new keyword to update the database immediately after sending the request

const editNote = async(req, res) =>{
    try{
        const {id} = req.params;
        const{title, content} = req.body;
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
         console.log(updatedNote); //For developer
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
                message:`No note Found`,
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