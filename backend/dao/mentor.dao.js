const db = require('../config/db-config');

const getAllMentors = async () => {
    let row = [];
    try {
        const [rows, fields] = await db.query("SELECT * FROM mentor_details");
        row = rows;
        console.log("result: ", rows)
        console.log("fields: ", fields)
        // console.log(row)
    } catch (error) {
        console.log(error);
    }
    return row
};

const addMentor = async (body) => {
    const { mentorName, roleId, courseId, userId } = body
    const values = [mentorName, roleId, courseId, userId]
    const query = "INSERT INTO mentor_details (mentor_name,role_id,course_id,user_id) values (?,?,?,?)";

    const [rows, fields] = await db.execute(query, values);
    console.log(rows)
};

// updateMentorById: 
const getMentorById =async(req,res) =>{
    let row =[]
    let id=req.params.id
    try {
        
        const [rows, fields] = await db.query(
          "SELECT * FROM mentor_details WHERE mentor_id = ?",
           [id]
        
           );
           row=rows;
      } catch (err) {
        console.error(err);
      }
      return row;
 };

// put method 
const updateMentor = async (id, body) => {

    const { mentorName, roleId, courseId, userId } = (id, body)
    const values = [mentorName, roleId, courseId, userId,id]
    const query = "UPDATE mentor_details SET mentor_name = ?, role_id = ?, course_id = ?, user_id = ?  WHERE mentor_id = ?";

    const rows = db.execute(query, values);
    console.log(rows);
}

// put method 
const deleteMentorById = async (id) => {
    let message = "";
    let values = [id];
    try {
        const [rows, fields] = await db.query("DELETE FROM mentor_details WHERE mentor_id=? ", values);

        // db.query(query,values);
        if (rows.affectedRows > 0)
            message = "DELETED SUCCESSFULLY";
        else message = "MENTOR NOT FOUND"
    } catch (error) {
        console.log(error);
        message = "DELETE FAILURE";
    }
    return message;
}

module.exports = { getAllMentors, addMentor, updateMentor, deleteMentorById,getMentorById };
