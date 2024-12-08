export const validatePoll = (question, options, existingQuestions = []) => {
  const errors = {};

  // Check if the question is empty
  if (!question.trim()) {
    errors.question = 'Poll question is required.';
  }

  // Check if the question is unique
  if (existingQuestions.some((existing) => existing.toLowerCase().trim() === question.toLowerCase().trim())) {
    errors.question = 'Poll question must be unique.';
  }

  // Check if there are at least two options
  if (options.length < 2) {
    errors.options = 'At least two options are required.';
  }

  // Check if all options are unique
  if (new Set(options.map((opt) => opt.toLowerCase().trim())).size !== options.length) {
    errors.options = 'Options must be unique.';
  }

  // Add more validation rules here if needed
  return errors;
};