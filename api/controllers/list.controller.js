const ListModel = require('../models/list.model')

const createList = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
        
    }

}

const getAllLists = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

}

const getOneList = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

}

const updateList = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

}

const deleteList = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }

}

module.exports = {
    createList,
    getAllLists,
    getOneList,
    updateList,
    deleteList
}