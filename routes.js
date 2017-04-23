Router.configure({
    layoutTemplate: 'Main'
});

Router.route('/', {
    name: 'Home',
    template: 'HomePage'
});

Router.route('/config', {
    name: 'Config',
    template: 'Config'
});

Router.route('/budget', {
    name: 'Budget',
    template: 'Budget'
});