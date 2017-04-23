Router.configure({
    layoutTemplate: 'Main'
});

Router.route('/', {
    name: 'Home',
    template: 'HomePage',
    onAfterAction: function() {
        document.title = 'Budget Home';
    }
});

Router.route('/config', {
    name: 'Config',
    template: 'Config',
    onAfterAction: function() {
        document.title = 'Budget Config';
    }
});

Router.route('/budget', {
    name: 'Budget',
    template: 'Budget',
    onAfterAction: function() {
        document.title = 'See Your Budget';
    }
});