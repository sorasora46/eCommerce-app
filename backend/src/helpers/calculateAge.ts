export const calculateAge = (year: number | Date): number => {
  const currentYear = new Date().getFullYear();
  const selectedYear = new Date(year).getFullYear();
  return currentYear - selectedYear;
}