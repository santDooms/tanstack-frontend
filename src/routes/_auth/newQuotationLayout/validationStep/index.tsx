import { createFileRoute } from '@tanstack/react-router';
import { ValidationStep } from '../../../../pages/ValidationStep';

export const Route = createFileRoute(
  "/_auth/newQuotationLayout/validationStep/",
)({
  component: ValidationStep,
});
