import { IRootAppState } from './../../../typings/index';
import { createSelector } from "@reduxjs/toolkit";

const seelctHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopCars = createSelector(seelctHomePage, (homePage) => homePage.topCars);