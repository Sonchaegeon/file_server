module.exports = (sequelize, DataTypes) => {
    const notice_tbl = sequelize.define("notice_tbl", {
        path: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        notice_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        
    }, {
        freezeTableName: true,
    });
    return notice_tbl;
};