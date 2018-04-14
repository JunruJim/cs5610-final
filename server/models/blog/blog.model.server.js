var mongoose = require("mongoose");

var RstModel = require("../rst/rst.model.server");
var BlogModel = mongoose.model('WidgetModel', BlogSchema);

module.exports = BlogModel;

function createBlog(pageId, Widget) {

  return BlogModel.create(Widget)
    .then(function(responseRst){
      RstModel.findRstById(responseRst._id)
        .then(function(page){
          page.widgets.push(responseWidget);
          return page.save();
        })
      return responseWidget;
    });
}

function findAllWidgetsForPage(pageId) {
  // return WidgetModel.find({'pageId' : pageId})
  //   .populate('pageId').exec();
  return PageModel
    .findPageById(pageId)
    .populate('widgets')
    .then(
      function (page) {
        // console.log(page.widgets);
        return page.widgets;
      }
    )
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget){
  return WidgetModel.update({_id: widgetId}, widget);
}

function deleteWidget(widgetId) {
  widget = WidgetModel.findWidgetById(widgetId).then(function(widget) {
    PageModel.findPageById(widget.pageId).then(function(page){
      page.widgets.pull({_id: widgetId});
      page.save();
    })
  });
  return WidgetModel.remove({_id: widgetId});
}

function reorderWidget(pageId, start, end) {
  return PageModel.findPageById(pageId).then(
    function(page) {
      page.widgets.splice(end, 0, page.widgets.splice(start, 1)[0]);
      return page.save();
    }
  )
}
