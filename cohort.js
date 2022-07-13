const cohort = {
  name: 'May2022',
  id: 1234,
  arrayOfSudents:['peter', 'alex', 'adam']};

const newCohort = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.arrayOfSudents.length} students in this cohort`)
};

newCohort(cohort);