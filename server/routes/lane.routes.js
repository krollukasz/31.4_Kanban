import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Add a new Lane
router.route("/lanes").post(LaneController.addLane);

// Get all Lanes
router.route("/lanes").get(LaneController.getLanes);

// Edit lane name - zmiana nazwy
router.route('/lanes/:laneId').put(LaneController.editLane);

// Delete a lane by laneId
router.route("/lanes/:laneId").delete(LaneController.deleteLane);

export default router;
