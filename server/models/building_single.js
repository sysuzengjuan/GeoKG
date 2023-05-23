const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingSchema = new Schema({
  _id: Schema.Types.ObjectId,
  type: String,
  name: String,
  region: String,
  address: String,
  protect_level: String,
  current_situation: String,
  built_year: String,
  built_people: String,
  description: String,
  exterior: String,
  structure_with_material: String,
  structure_with_structure: String,
  has_type: [String],
  has_material: [String],
  layer: String,
  is_part_of: [Schema.Types.ObjectId],
  has_picture: [String],
  // location: Object,
});

/**
 * @desc构建表模型
 */
const BuildingModel = mongoose.model('Building', buildingSchema, 'Building');

module.exports = BuildingModel;
