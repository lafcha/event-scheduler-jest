/**
 * Describe an event
 */
export default class Event {

    /**
     * Event starting time
     * @type Date
     */
    startTime;
    /**
     * Event starting time
     * @type Date
     */
    endTime;
    /**
     * Event starting time
     * @type string
     */
    title;
    /**
     * Event location
     * @type string
     */
    location;
    /**
     * Event description
     * @type string
     */
    description;

    /**
     * Create a new event
     * @param startTime
     * @param endTime
     * @param title
     * @param location
     * @param description
     */
    constructor(startTime, endTime, title, location, description) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.title = title;
        this.location = location;
        this.description = description;
    }

    /**
     * Get events start time
     * @return {Date}
     */
    getStartTime() {
        return this.startTime;
    }

    /**
     * Change event start time
     * @param startTime
     */
    setStartTime(startTime) {
        this.startTime = startTime;
    }

    /**
     * Get event end time
     * @return {Date}
     */
    getEndTime() {
        return this.endTime;
    }

    /**
     * Change event end time
     * @param endTime
     */
    setEndTime(endTime) {
        this.endTime = endTime;
    }

    /**
     * Get the event title
     * @return {string}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Set the event title
     * @param title
     */
    setTitle(title) {
        this.title = title;
    }

    /**
     * Get the event location
     * @return {string}
     */
    getLocation() {
        return this.location;
    }

    /**
     * Set the event location
     * @param location
     */
    setLocation(location) {
        this.location = location;
    }

    /**
     * Get the event description
     * @return {string}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Set the event description
     * @param description
     */
    setDescription(description) {
        this.description = description;
    }

   

}