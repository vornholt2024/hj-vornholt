import { MonitorUI } from "./monitor-ui";
import { MonitorController } from "./monitor-controller";

const ui = new MonitorUI();

const controller = new MonitorController(ui);

controller.start();