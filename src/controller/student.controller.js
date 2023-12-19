import { studentService } from "../service/student.service.js";
import { catchAsync } from "../utils/catchAsync.js";

class StudentController {
    create = catchAsync(async (req, res) => {
        const { body } = req;

        const studentInput = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            class: body.className
        };

        await studentService.create(studentInput);
        res.status(201).json({
            message: "Success"
        });
    });

    // update = catchAsync(async (req, res) => {
    //     const { body, params, adminId } = req;
    //     const update = {};

    //     if (body.name) {
    //         update.name = body.name;
    //     }
    //     if (body.description) {
    //         update.description = body.description;
    //     }

    //     if (!update.name && !update.description) {
    //         throw new CustomError("No update data provided", 400);
    //     }

    //     await projectService.update(params.id, adminId, update);
    //     res.status(204).send();
    // });
}
export const studentController = new StudentController();
