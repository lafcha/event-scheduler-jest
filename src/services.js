import EventRepository from "./repository";
import Event from "./models";
import { elementIsNotSelected } from "selenium-webdriver/lib/until";

export default class EventService {
  /**
   * The event repository
   * @type {EventRepository}
   */
  _eventRepository;

  /**
   *
   * @param {EventRepository} eventRepository
   */
  constructor(eventRepository) {
    this._eventRepository = eventRepository;
  }

  /**
   * Return all events
   * @return {Event[]}
   */
  getEvents() {
    return this._eventRepository.getAll();
  }

  /**
   * Get the first upcomming event
   * @return {null | Event}
   */
  getFirstEvent() {
    let allEvts = this._eventRepository.getAll();
    if (allEvts.length === 0) {
      return null;
    }
    let firstElement = allEvts[0];

    for (let index = 0; index < allEvts.length; index++) {
      const currentEl = allEvts[index];
      if (currentEl.getStartTime() < firstElement.getStartTime()) {
        firstElement = currentEl;
      }
    }
    return firstElement;
  }

  /**
   * Get the last upcomming event
   * @return {null | Event}
   */
  getLastEvent() {
    let allEvts = this._eventRepository.getAll();
    if (allEvts.length === 0) {
      return null;
    }
    let lastEvent = allEvts[0];

    for (let index = 0; index < allEvts.length; index++) {
      const currentEl = allEvts[index];
      if (currentEl.getStartTime() > lastEvent.getStartTime()) {
        lastEvent = currentEl;
      }
    }
    return lastEvent;
  }

  /**
   * Get the longest event
   * @return {null | Event}
   */
  getLongestEvent() {
    let allEvts = this._eventRepository.getAll();
    let longestEvent = null;
    let longestEventDuration = 0;
    for (let index = 0; index < allEvts.length; index++) {
      const currentEl = allEvts[index];
      const currentElduration = this.calcDuration(currentEl);
      if (currentElduration >= longestEventDuration) {
        longestEvent = currentEl;
        longestEventDuration = currentElduration;
      }
    }
    return longestEvent;
  }

  /**
   * get the shortest event
   * @return {null | Event}
   */
  getShortestEvent() {
    let allEvts = this._eventRepository.getAll();
    let shortestEvent = null;
    let duration = 0;

    allEvts.forEach((event,index)=> {
      if (index === 0) {
        console.log('hello')
        shortestEvent = event;
        duration = Math.abs(this.calcDuration(event));
      } else {
        const currentElduration = this.calcDuration(event);
        if (currentElduration < duration && currentElduration >=0) {
          shortestEvent = event;
          duration = currentElduration;
        }
      }
    });
    return shortestEvent;
  }

  // A implementer en TDD
  /**
   *
   * @param {Date} time
   * @return {Event[]}
   */
  hasEventOn(time) {
    let evts = this._eventRepository.getAll();
    return evts.filter(function (e) {
      return time >= e.getStartTime() && time <= e.getEndTime();
    });
  }

  // A implementer en TDD
  /**
   *
   * @param title
   * @return {null | Event}
   */
  getEventByTitle(title) {
    return null;
  }

  // A implementer en TDD
  /**
   *
   * @param {Date} time
   */
  isLocationAvailable(time) {}

  /**
   * Get current events
   * @return {Event[]}
   */
  getCurrentEvents() {
    let now = Date.now();
    return this.hasEventOn(new Date(now));
  }

  calcDuration(Event) {
    return Event.getEndTime() - Event.getStartTime();
  }
}
