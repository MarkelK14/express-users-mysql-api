const db = require ('../config/db');

const selectAll = async (page, limit) => {
    const [result] = await db.query('SELECT * FROM users'); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result; // Return the result of the query
}

const selectById = async (id) => {
    const [result] = await db.query('SELECT * FROM users WHERE id = ?', [id]); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result; // Return the result of the query
}

const insert = async ({name, email, password}) => {
    const [result] = await db.query(`
        INSERT INTO users (name, email, password, created_on)
        VALUES (?, ?, ?, ?)
        `, [name, email, password, new Date()]); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result; // Return the result of the query
}

const updateById = async (userId, {name, email, password}) => {
    const [result] = await db.query(`
        UPDATE users
        SET name = ?, email = ?, password = ?
        SWHERE id = ?
        `, [name, email, password]
    ); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result; // Return the result of the query
}

const deleteById = async (userId) => {
    const [result] = await db.query('DELETE FROM users WHERE id = ?', [userId]); // Promise<[QueryResult, FieldPacket[]]> => Destructuring the result to get the first element
    return result; // Return the result of the query
}

module.exports = {
    selectAll,
    selectById,
    insert,
    updateById,
    deleteById
}