import { supabase } from "../config/supabaseClient.js";

export const ItemModel = {
  async getAll(status) {
    let query = supabase.from("items").select("*").order("id", { ascending: true });
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

  async create({ nama, status, tanggalMasuk, tanggalSelesai }) {
    const { data, error } = await supabase
      .from("items")
      .insert([{ nama, status, tanggalMasuk, tanggalSelesai }])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, { nama, status, tanggalMasuk, tanggalSelesai }) {
    const { data, error } = await supabase
      .from("items")
      .update({ nama, status, tanggalMasuk, tanggalSelesai })
      .eq("id", id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await supabase.from("items").delete().eq("id", id);
    if (error) throw error;
    return { message: "Item deleted successfully" };
  }
};
