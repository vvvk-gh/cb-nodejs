const Sequeilize = require('sequelize');
const DataTypes = Sequeilize.DataTypes;
const db = new Sequeilize('sampledb1' , 'sampleuser1' , 'samplepass1' ,{
    host:'localhost',
    dialect:'mysql'
});


//exporting 
exports = module.exports = {
    db
}
