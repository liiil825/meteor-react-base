FlowRouter.route('/', {
  action: function(params, queryParams) {
    injectTapEventPlugin();
    console.log("route> top", params);
    ReactLayout.render(MainComponent)
  }
});

