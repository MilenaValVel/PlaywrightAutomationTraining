
import {
  Request,
  formatRequestId,
  slaHours,
  isOverdue,
  isValidTitle,
  isAllowedCategory,
  writeSummary,
} from './request-utils';

const allowedCategories: string[] = ['Roads', 'Lighting', 'Parks', 'Waste'];

const nowHour: number = 100;

const requests: Request[] = [
  {
    id: 1,
    title: 'Broken streetlight',
    priority: 1,
    createdHour: 90,
    category: 'Lighting',
    status: 'Submitted'
  },
  {
    id: 2,
    title: 'Large pothole',
    priority: 2,
    createdHour: 60,
    category: 'Roads',
    status: 'In Review'
  },
  {
    id: 3,
    title: 'Damaged park bench',
    priority: 3,
    createdHour: 90,
    category: 'Parks',
    status: 'Submitted'
  },
  {
    id: 4,
    title: 'Overflowing bin',
    priority: 2,
    createdHour: 80,
    category: 'Waste',
    status: 'Resolved'
  },
  {
    id: 5,
    title: 'Road sign missing',
    priority: 1,
    createdHour: 98,
    category: 'Roads',
    status: 'In Review'
  },
  {
    id: 6,
    title: 'Grass needs cutting',
    priority: 4,
    createdHour: 10,
    category: 'Parks',
    status: 'Submitted'
  },
  {
    id: 7,
    title: 'Str',
    priority: 3,
    createdHour: 70,
    category: 'InvalidCategory',
    status: 'Submitted'
  },
  {
    id: 8,
    title: 'Illegal waste dumping',
    priority: 1,
    createdHour: 50,
    category: 'Waste',
    status: 'In Review'
  }
];

// Print each request
console.log('=== REQUEST REPORT ===');

requests.forEach((request: Request): void => {
  const validTitle: boolean =
    isValidTitle(request.title);

  const validCategory: boolean =
    isAllowedCategory(
      request.category,
      allowedCategories
    );

  const overdue: boolean =
    isOverdue(
      request.createdHour,
      nowHour,
      request.priority
    );

  console.log('-------------------------');
  console.log(writeSummary(request));
  console.log(`Priority: ${request.priority}`);
  console.log(`SLA: ${slaHours(request.priority)} hours`);
  console.log(`Overdue: ${overdue}`);
  console.log(`Valid title: ${validTitle}`);
  console.log(`Valid category: ${validCategory}`);
});