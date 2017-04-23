import { Template } from 'meteor/templating'; 
import { BudgetConfig } from '../../../api/budgets.js';
 
import './budget.html';
 
Template.Budget.helpers({
  budgets() {
    return BudgetConfig.find({});
  },
});