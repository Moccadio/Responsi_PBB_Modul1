import { ItemModel } from "../models/itemModel.js";

export const ItemController = {
  async getAll(req, res) {
    try {
      const items = await ItemModel.getAll(req.query.status);
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  async getById(req, res) {
    try {
      const item = await ItemModel.getById(req.params.id);
      res.json(item);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  },

  async create(req, res) {
    try {
      const newItem = await ItemModel.create(req.body);
      res.status(201).json(newItem);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async update(req, res) {
    try {
      const updated = await ItemModel.update(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  async remove(req, res) {
    try {
      const result = await ItemModel.remove(req.params.id);
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
};
