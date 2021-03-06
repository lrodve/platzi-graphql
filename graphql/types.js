const { Student, Course } = require("../db/schema")
const errorHandler = require("./errorHandler")

module.exports = {
    Course: {
        people: async ({ people }) => {
            try {
                let ids
                people ? ids = people.map(id => id) : []
                const peopleData = await Student.find(
                    { _id: { $in: ids } }
                )
                return peopleData
            } catch (err) {
                errorHandler(err)
            }
        }
    }
}