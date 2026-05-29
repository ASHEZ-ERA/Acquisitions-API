export const formatValidationErrors = (errors) => {
  if (!errors || !errors.issues) return 'An unknown validation error occurred.';

  if (Array.isArray(errors.issues)) return errors.issues.map(i => i.message).join('; ');

  return JSON.stringify(errors);
};