const { where } = require('sequelize');
const Task = require('../models/Task');

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create');
    }

    static async createTaskSave(req, res) {
        const { title, description } = req.body;

        const task = {
            title,
            description,
            done: false,
        };

        await Task.create(task);

        res.redirect('/tasks');
    }

    static async removeTask(req, res) {
        const id = req.body.id;

        await Task.destroy({ where: { id } });

        res.redirect('/tasks');
    }

    static async updateTask(req, res) {
        const id = req.params.id;

        const task = await Task.findOne({ where: { id }, raw: true });

        res.render('tasks/edit', { task });
    }

    static async updateTaskPost(req, res) {
        const { id, title, description } = req.body;

        const updatedTask = {
            title,
            description,
        };

        await Task.update(updatedTask, { where: { id } });

        res.redirect('/tasks');
    }

    static async showTasks(req, res) {
        const tasks = await Task.findAll({ raw: true });

        res.render('tasks/all', { tasks });
    }
};
