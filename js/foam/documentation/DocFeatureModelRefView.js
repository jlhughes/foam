/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

CLASS({
  name: 'DocFeatureModelRefView',
  package: 'foam.documentation',
  extendsModel: 'foam.documentation.DocRefView',
  label: 'Documentation Feature Model Link Reference View',
  help: 'The view of a documentation reference link based on a Model.',

  documentation: function() { /*
    An inline link to another place in the documentation. See $$DOC{ref:'DocView'}
    for notes on usage. Set $$DOC{ref:'.data'} to a model name.
    */},

  methods: {
    onDataChange: function(old,nu) {
      this.SUPER(old,nu);
      this.ref = this.data;
      if (this.docRef.valid) {
        this.text = this.docRef.resolvedModelChain[0].name;
      } else {
        this.text = "[INVALID]"+this.data;
      }
    }
  }

});