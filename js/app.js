import { loadWeather } from "./api.js";
import { authorization } from "./author.js";
import {setupEffects, initHistoryModal} from "./ui.js";
import {greeting} from "./ui.js";
import {tbilisiLocations, renderLocations, updateLocation} from "./locations.js";

document.addEventListener('DOMContentLoaded', () => {
    authorization();
    loadWeather();
    setupEffects();
    greeting();
    renderLocations();
    initHistoryModal();

});