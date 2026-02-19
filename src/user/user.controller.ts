import type { Request, Response } from 'express';
import userService from './user.service'

async function addUser(req: Request, res: Response) {
    try {
        const user = req.body;

        const result = await userService.addUser(user);

        res.status(201).json({ status: 'success',message: 'User added successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "User failed to add", data: null, errors: "An unexpected error occurred." });
    }
}

async function getAllUsers(req: Request, res: Response) {
    try {
        let result = await userService.getAllUsers();

        console.log(result);
        res.status(200).json({status: 'success', message: 'Users fetched successfully', data: result, errors: null});
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "error", message: "Users failed to fetch", data: null, errors: "An unexpected error occurred."});
    }
}

async function getUserById(req: Request, res: Response) {
    try {
        /* const workerCellId = req.params.id;

         if (!workerCellId) {
             return res.status(400).json({ status: "error", message: "Worker Cell ID is required.", errors: "Worker Cell ID is required" });
         }

         const result = await workerCellService.getWorkerCellWithAffectationsById(workerCellId);

         if (!result) {
             return res.status(404).json({ status: "error", message: "Worker Cell not found.", errors: "Worker Cell not found" });
         }*/

        //res.status(200).json({ status: 'success', message: 'Worker Cell fetched successfully', data: result, errors: null });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to fetch Worker Cell.", errors: "An unexpected error occurred." });
    }
}

async function updateUserById(req: Request, res: Response) {
    /*try {
        const dashboardId = req.params.id;
        const blobName = req.body.blob;
        const blob = await azureBlobService.read('dashboard-update-request', blobName)

        if (!dashboardId) {
            return res.status(400).json({ status: "error", message: "Dashboard ID is required", errors: "Missing ID" });
        }

        const result = await dashboardService.updateDashboardById(dashboardId, blob);

        if (!result) {
            return res.status(404).json({ status: "error", message: "Dashboard not found", errors: "Dashboard does not exist" });
        }

        const url = await azureBlobService.write("dashboard-update-response", `response_${formatDateTimeForFileName(new Date())}`, result)

        res.status(200).json({ status: 'success', message: 'Dashboard updated successfully', data: url, errors: null });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Failed to update Dashboard", errors: "An unexpected error occurred." });
    }*/
}

async function deleteUserById(req: Request, res: Response) {
    try {
        const userId = req.params.id;

        if (!userId) {
            return res.status(400).json({ status: "error", message: "User ID is required", errors: "Missing ID" });
        }

        const result = await userService.deleteUserById(Number(userId));

        if(!result) {
            return res.status(400).json({ status: "error", message: "Dashboard failed to delete", errors: 'The dashboard does not exist' });
        }

        res.status(200).json({ status: 'success',message: 'Dashboard deleted successfully', data: result, errors : null});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: "error", message: "Dashboard failed to delete", errors: "An unexpected error occurred." });
    }
}

export default {
    addUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
};