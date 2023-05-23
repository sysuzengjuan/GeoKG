const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const buildingComplexSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  type: String,
  region: String,
  address: String,
  protect_level: String,
  description: String,
  built_year: String,
  location: Object,
  has_part: Array,
  has_picture: Array,
  has_type: Array
});

/**
 * @desc构建表模型
 */
const BuildingComplexModel = mongoose.model('BuildingComplex', buildingComplexSchema, 'BuildingComplex');

module.exports = BuildingComplexModel;
