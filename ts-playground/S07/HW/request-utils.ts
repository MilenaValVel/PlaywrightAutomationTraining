
export type Request = {
  id: number;
  title: string;
  priority: number;
  createdHour: number;
  category: string;
  status: string;
};

// Format request ID
export function formatRequestId(
  id: number,
  prefix: string = 'REQ'
): string {
  return `${prefix}-${String(id).padStart(4, '0')}`;
}

// Calculate SLA hours based on priority
export function slaHours(priority: number): number {
  if (priority === 1) {
    return 4;
  }

  return priority <= 3 ? 24 : 72;
}

// Check if request is overdue
export function isOverdue(
  createdHour: number,
  nowHour: number,
  priority: number
): boolean {
  return nowHour - createdHour > slaHours(priority);
}

// Validate title (5-100 characters)
export function isValidTitle(title: string): boolean {
  const length: number = title.length;

  return length >= 5 && length <= 100;
}

// Check allowed category
export function isAllowedCategory(
  category: string,
  allowed: string[]
): boolean {
  return allowed.includes(category);
}

// Generate summary text
export function writeSummary(
  request: Request
): string {
  return `${formatRequestId(request.id)}: ${request.title} ` +
    `[${request.category}] - ${request.status}`;
}
