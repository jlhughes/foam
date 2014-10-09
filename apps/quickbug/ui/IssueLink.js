MODEL({
  name: 'IssueLink',
  extendsModel: 'View',

  properties: [
    {
      name: 'issue'
    },
    {
      name: 'issueDAO',
      scope: '__ctx__',
      // TODO: should be renamed from IssueDAO to issueDAO in __ctx__
      defaultValueFn: function() { return this.__ctx__.IssueDAO; }
    },
    {
      name: 'property',
      help: 'Property to recurse on.'
    },
    {
      name: 'maxDepth',
      defaultValue: 0
    },
  ],

  methods: {
    toHTML: function(opt_depth) {
      this.on('click',     this.editIssue.bind(this, this.issue),    this.id);
      this.on('mouseover', this.startPreview.bind(this, this.issue), this.id);
      this.on('mouseout',  this.endPreview,                          this.id);

      return '<a href="" id="' + this.id + '">Issue ' + this.issue + '</a>';
    },

    initHTML: function() {
      this.SUPER();

      var self = this;

      this.issueDAO.find(this.issue, { put: function(issue) {
        if ( ! self.$ ) return; // stale

        if ( ! issue.isOpen() ) {
          self.$.style.textDecoration = 'line-through';
        }

        if ( self.maxDepth > 1 ) {
          var ids = issue[self.property.name];
          
          if ( ids.length ) {
            var subView = self.__ctx__.BlockView.create({
              property: self.property,
              maxDepth: self.maxDepth-1,
              ids:      ids
            });
            
            self.$.insertAdjacentHTML(
              'afterend',
              '<div style="margin-left:10px;">' + subView.toHTML() + '</div>');
            
            subView.initHTML();
          }
        }
      }});
    }
  },

  listeners: [
    {
      name: 'editIssue',
      code: function(id) { this.parent.__ctx__.browser.location.id = id; }
    },
    {
      name: 'startPreview',
      code: function(id, e) {
        if ( this.currentPreview ) return;

        var self = this;
        this.issueDAO.find(id, { put: function(issue) {
          self.currentPreview = self.__ctx__.PopupView.create({
            x: e.x+30,
            y: e.y-20,
            view: self.__ctx__.QIssueTileView.create({issue: issue})
          });

          self.currentPreview.open(self);
        }});
      }
    },
    {
      name: 'endPreview',
      code: function() {
        if ( ! this.currentPreview ) return;
        this.currentPreview.close();
        this.currentPreview = null;
      }
    }
  ]

});
