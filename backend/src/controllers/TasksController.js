const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function CreateTask (req, res) {};

async function GetTask (req, res) {};

async function GetAllTasks (req, res) {};

async function UpdateTask (req, res) {};

async function DeleteTask (req, res) {};

module.exports = {
    CreateTask,
    GetTask,
    GetAllTasks,
    UpdateTask,
    DeleteTask,
}