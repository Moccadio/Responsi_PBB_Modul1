import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  async getAll(status) {
    let query = supabase.from("items").select("*");
    if (status) query = query.eq("status", status);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getById(id) {
    const { data, error } = await supabase.from("items").select("*").eq("id", id).single();
    if (error) throw error;
    return data;
  },

  async create({ nama, status }) {
    const { data, error } = await supabase.from("items").insert([{ nama, status }]).select().single();
    if (error) throw error;
    return data;
  },

  async update(id, { nama, status }) {
    const { data, error } = await supabase.from("items").update({ nama, status }).eq("id", id).select().single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw error;
    return { message: "Item deleted successfully" };
  }
};
