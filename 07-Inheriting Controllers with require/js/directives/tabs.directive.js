function tabs() {
  return {
    transclude: true,
    template: `
      <div>
        <div class="tabs-content">
          <ul class="list-tab">
            <li ng-repeat="tab in tabs.list">
              <div ng-click="tabs.selectTab($index)">
                {{ tab.label }}
              </div>
            </li>
          </ul>
        </div>
        
        <div class="content" ng-transclude>
          //content injected
        </div>
      </div>
    `,
    controller: function () {
      var crtl = this;
      crtl.list = [];
      crtl.addTab = function (tab) {
        if(!crtl.list.length) 
          tab.selected = true;
        crtl.list.push(tab);
      }

      crtl.selectTab = function (index) {
        crtl.list.forEach(tab => {
          tab.selected = false;
        });
        crtl.list[index].selected = true;
      }
    },
    controllerAs: 'tabs'
  }
}

angular
  .module('app')
  .directive('tabs', tabs);
