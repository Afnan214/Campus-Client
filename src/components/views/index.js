/*==================================================
/src/components/views/index.js

This is a "barrel" file for the View components, which combines all the exports of individual Views
and makes it easier to be used by the corresponding Container components.

Note: A "barrel" file is a way to rollup exports from other modules into a single convenient module. 
The "barrel" (module) file re-exports the exports of other modules.
================================================== */
export { default as AllCampusesView } from "./AllCampusesView/AllCampusesView";
export { default as AllStudentsView } from "./AllStudentsView/AllStudentsView";
export { default as NewStudentView } from "./NewStudentView";
export { default as CampusView } from "./CampusView/CampusView";
export { default as StudentView } from "./StudentView/StudentView";
export { default as HomePageView } from "./HomePageView/HomePageView";