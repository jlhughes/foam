/**
 * @license
 * Copyright 2016 Google Inc. All Rights Reserved.
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
  package: 'foam.demos.heroes',
  name: 'DashboardCitationView',
  extends: 'foam.u2.View',
  
  imports: [ 'editHero' ],

  templates: [
    function initE() {/*#U2
      <div onClick="onClick" style="width:100px;height:100px;border:2px solid black;background: gray;margin: 20px;">{{this.data.name$}}</div>
    */}
  ],

  listeners: [
    function onClick() { this.editHero(this.data); }
  ]
});
  
